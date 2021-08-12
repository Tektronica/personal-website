import Head from 'next/head'
import Date from '../../components/date'
import Layout from '../../components/templates/Layout'
// import { connectToDatabase } from '../../lib/mongodb'
import { XMasonry, XBlock } from "react-xmasonry"; // Imports precompiled bundle
import Image from "next/image"
import StackGrid from "react-stack-grid";
import Bricks from 'bricks.js'
import Masonry from 'react-masonry-component';
import ImageWithFallback from '../../lib/image-with-fallback';
import Gallery from 'react-photo-gallery';
import ExampleWithLightbox from '../../components/ExampleWithLightbox';
import { photos } from "../../public/photos";

// mq      - the minimum viewport width (any unit)
// columns - the number of vertical columns
// gutter  - the space (in px) between the columns and grid items

// const sizes = [
//     { columns: 2, gutter: 10 },
//     { mq: '768px', columns: 3, gutter: 25 },
//     { mq: '1024px', columns: 4, gutter: 50 }
// ]

// const instance = Bricks({
//     sizes: sizes
// })

const masonryOptions = {
    transitionDuration: 0
};


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

const imagesLoadedOptions = { background: '.my-bg-image-el' }

export default function Album({ }) {

    return (
        <div className="flex flex-col justify-center min-h-screen">
            <Head>
                <title>Placeholder</title>
                {/* <title>{photos[0].album}</title> */}
            </Head>
            
            <h1 className="text-6xl font-bold uppercase">
                Placeholder
                {/* {photos[0].album.replace('-', ' ')} */}
            </h1>

            <article>

                {/* react-photo-gallery */}
                {/* Lazy load? */}
                <ExampleWithLightbox photos={photos} />

                {/* Tailwindcss */}
                {/* Not entirely dynamic */}
                {/* <div className='flex flex-wrap'>
                    {photos.map(({ _id, src, height, width, album }) => (
                        <div className="pl-1 pt-1 pr-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 hover hover:bg-yellow-400" key={_id}>
                            <ImageWithFallback
                                className=""
                                src={src}
                                alt={_id}
                                width={300}
                                height={height * 300 / width}
                                placeholder="blur"
                                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                                // https://source.unsplash.com/
                                fallbackSrc={`https://source.unsplash.com/${300}x${Math.round(height * 300 / width)}/?${album}`}
                                // fallbackSrc={`https://via.placeholder.com/${300}x${Math.round(height * 300 / width)}/FFAF00/000000?Text=Broken+Link!`}

                            />
                        </div>
                    ))}
                </div> */}

                {/* react-masonry-component */}
                {/* <Masonry
                    className={'my-gallery-class'} // default ''

                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    imagesLoadedOptions={imagesLoadedOptions} // default {}
                >
                    {photos.map(({ _id, src, height, width, album }) => (
                        <div className="pl-1 pt-1 pr-1" key={_id}>
                            <ImageWithFallback
                                className=""
                                src={src}
                                alt={_id}
                                width={300}
                                height={height * 300 / width}
                                placeholder="blur"
                                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                                // https://source.unsplash.com/
                                fallbackSrc={`https://source.unsplash.com/${300}x${Math.round(height * 300 / width)}/?${album}`}
                                // fallbackSrc={`https://via.placeholder.com/${300}x${Math.round(height * 300 / width)}/FFAF00/000000?Text=Broken+Link!`}

                            />
                        </div>
                    ))}
                </Masonry> */}

                {/* react-xmasonry */}
                {/* <XMasonry>
                    {photos.map(({ _id, src, height, width, album}) => (
                        <XBlock key={_id}>
                            <div className="pl-1 pt-1 pr-1" key={_id}>
                                <ImageWithFallback
                                    className=""
                                    src={src}
                                    alt={_id}
                                    width={300}
                                    height={height * 300 / width}
                                    placeholder="blur"
                                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                                    // https://source.unsplash.com/
                                    fallbackSrc={`https://source.unsplash.com/${300}x${Math.round(height * 300 / width)}/?${album}`}
                                // fallbackSrc={`https://via.placeholder.com/${300}x${Math.round(height * 300 / width)}/FFAF00/000000?Text=Broken+Link!`}

                                />
                            </div>
                        </XBlock>
                    ))}
                </XMasonry> */}

                {/* react-stack-grid */}
                {/* <StackGrid columnWidth={350}>
                    {photos.map(({ _id, src, height, width, album}) => (
                        <div className="pl-1 pt-1 pr-1" key={_id}>
                            <ImageWithFallback
                                className=""
                                src={src}
                                alt={_id}
                                width={300}
                                height={height * 300 / width}
                                placeholder="blur"
                                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                                // https://source.unsplash.com/
                                fallbackSrc={`https://source.unsplash.com/${300}x${Math.round(height * 300 / width)}/?${album}`}
                                // fallbackSrc={`https://via.placeholder.com/${300}x${Math.round(height * 300 / width)}/FFAF00/000000?Text=Broken+Link!`}

                            />
                        </div>
                    ))}
                </StackGrid> */}

            </article>
        </div>
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
// export async function getServerSideProps({ params }) {
//     // const res = await fetch("https://jsonplaceholder.typicode.com/photos");
//     // const gallery = await res.json();
//     // return { props: { photos: gallery }, };

//     const { db } = await connectToDatabase();
//     const gallery = await db
//         .collection("gallery")
//         .find({ album: params.album })
//         .sort({ date: 1 })
//         .limit(150)
//         .toArray();

//     return {
//         props: {
//             photos: JSON.parse(JSON.stringify(gallery)),
//         },
//     };
// }

Album.layout = Layout