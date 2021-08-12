
import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Image from 'next/image';
// import ImageWithFallback from '../lib/image-with-fallback';


const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`


const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)


// Response (dynamic) columns
// https://github.com/neptunian/react-photo-gallery/blob/0bb8e4c4a027c021f8a5a06de71e89026596fd95/examples/src/ExampleDynamicColumns.js
function columns(containerWidth) {
  let columns = 1;
  if (containerWidth >= 768) columns = 2;
  if (containerWidth >= 1024) columns = 3;
  if (containerWidth >= 1280) columns = 4;
  return columns;
}


// Custom Image rendering object
// https://github.com/neptunian/react-photo-gallery/issues/171#issuecomment-631057102
// https://github.com/neptunian/react-photo-gallery/issues/178#issuecomment-845826413
function ImageWithFallback(props) {

  const { fallbackSrc, ...photoObj } = props;
  const { index, photo, margin, direction, top, left, onClick, ...rest } = { ...photoObj };
  const [imgSrc, setImgSrc] = useState(photo.src);

  const cont = {
    backgroundColor: '#eee',
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
  };

  if (direction === 'column') {
    cont.position = 'absolute';
    cont.left = left;
    cont.top = top;
  }

  return (
    <div className={"image-item"}

      role={"button"}
      tabIndex={0}
      style={{
        width: photo.width,
        height: photo.height,
        margin,

        // the important staff
        position: "absolute",
        left,
        top,
      }}
      onClick={onClick}
    >
      <Image
        {...photo}
        onError={() => { setImgSrc(fallbackSrc) }}
      />
    </div>
  );
};


// Responsive masonry gallery with lightbox 
function ExampleWithLightbox({ photos }) {

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  // https://github.com/neptunian/react-photo-gallery/issues/200#issuecomment-887995313
  const customStyles = {
    view: () => ({
      // none of react-images styles are passed to <View />
      position: 'relative',
      '& > img': {
        position: 'relative',
        margin: '0 auto'
      },
    })
  };

  // optional; use a different image component than the default provided to display photo
  // https://github.com/neptunian/react-photo-gallery/issues/178#issuecomment-845826413
  const imageRenderer = useCallback(({ margin, index, photo, left, top, key }) => (
    <div className="image-item" style={{ margin: '5px' }}>

      <ImageWithFallback
        // src={photo.src}
        key={key}
        margin={margin}
        index={index}
        photo={photo}

        left={left}
        top={top}
        onClick={(e) => { openLightbox(e, { photo, index }) }}

        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}

        // https://source.unsplash.com/
        fallbackSrc={`https://source.unsplash.com/${Math.round(photo.width)}x${Math.round(photo.height)}/?${photo.album}`}
      />

    </div>
  ));

  return (
    <div>
      <Gallery
        photos={photos}
        renderImage={imageRenderer}

        direction={photos.length > 0 ? "column" : "row"}
        columns={columns}
        margin={5}
      />

      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              styles={customStyles}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default ExampleWithLightbox;
