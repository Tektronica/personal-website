
import Image from 'next/image';

// image masonry layout
import Masonry from 'react-masonry-css';

// image lightbox with swipe
import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

// Responsive masonry gallery with lightbox 
function ResponsiveMasonryLightbox({ photos }) {

  // image masonry responsive breakpoints
  // https://www.npmjs.com/package/react-masonry-css
  const breakpointColumnsObj = {
    default: 3,
    1300: 3,
    768: 2,
    500: 1
  };

  // image lightbox
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + 'gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  // prepare image block div to be served to masonry layout
  // const items = photos.map((photo, idx) => {
  //   return (
  //     <div
  //       className='flex flex-col transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover-trigger'
  //       key={photo.index}
  //       index={photo.index}>

  //       <Image
  //         src={photo.src}
  //         width={photo.width}
  //         height={photo.height}
  //       />
  //     </div>
  //   )
  // });

  // prepare image block div to be served to masonry layout with support for ligthbox
  // TODO: lightbox does not use the nextjs Image component... Need to fix this.
  const items = photos.map((photo, idx) => {
    return (
      <div
        className='flex flex-col transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover-trigger'
        key={idx}
      >
        <a
          className="gallery-thumbnail-link"
          href={photo.src}
          data-pswp-width={photo.width}
          data-pswp-height={photo.height}
          key={'gallery' + '-' + photo.index}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={photo.src}
            width={photo.width}
            height={photo.height}
          />
        </a>
      </div>
    )
  });

  return (
    <div>
      <div className="pswp-gallery" id={'gallery'}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {items}
        </Masonry>
      </div>
    </div>
  );
}

export default ResponsiveMasonryLightbox;
