
import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import ImageWithFallback from '../lib/image-with-fallback';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image from "next/image"

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

function columns(containerWidth) {
  let columns = 1;
  if (containerWidth >= 768) columns = 2;
  if (containerWidth >= 1024) columns = 3;
  if (containerWidth >= 1280) columns = 4;
  return columns;
}

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


  // optional; use a different image component than the default provided to display photo
  // https://github.com/neptunian/react-photo-gallery/issues/178#issuecomment-845826413
  const imageRenderer = useCallback(({ margin, index, photo, left, top, key, onClick }) => (
    <div className="image-item" style={{ margin: '5px' }}>

      {/* <LazyLoadImage
        className="image-hover" 
        {...photo} style={{ top: top, left: left }}
      /> */}

      <ImageWithFallback
        // src={photo.src}
        key={key}
        margin={margin}
        index={index}
        photo={photo}

        left={left}
        top={top}

        onClick={openLightbox}

        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}

        // https://source.unsplash.com/
        fallbackSrc={`https://source.unsplash.com/${Math.round(photo.width)}x${Math.round(photo.height)}/?${photo.album}`}
      />

      {/* <LazyLoadImage
                alt={photo.title}
                effect="blur"
                className="image-hover"
                width={300}
                height={photo.height * 300 / photo.width}
                placeholderSrc={`https://source.unsplash.com/${300}x${Math.round(photo.height * 300 / photo.width)}/?${photo.album}`}
                src={`https://source.unsplash.com/${300}x${Math.round(photo.height * 300 / photo.width)}/?${photo.album}`}
                style={{top: top, left: left}}
            />
        */}

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
