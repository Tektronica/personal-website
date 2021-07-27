import Head from 'next/head'
import Layout from '../components/templates/Layout'
import { getPhotos } from '../lib/photos'
import GalleryCard from '../components/Cards/GalleryCard/GalleryCard'

export default function Gallery({ photosDB }) {
    console.log(photosDB)
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Gallery</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-left justify-top w-full flex-1 px-20 text-left">
                <h1 className="text-6xl font-bold">
                    Gallery.
                </h1>
                <div className="grid grid-cols-3 gap-4 items-center max-w-4xl mt-6 sm:w-full">
                    {photosDB.photos.map(photo => (
                        <div key={photo.id}>
                        <GalleryCard id={photo.id} title={photo.title} photoURL={photo.url} />
                        </div>
                    ))}
                </div>
                <p className="mt-3 text-2xl">
                    This is where our photos will be!
                </p>
            </main>
        </div>
    )
}

Gallery.layout = Layout

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
    const photosDB = await getPhotos()

    return {
        // Passed to page components as prop
        props: {
            photosDB
        }
    }
}

Gallery.layout = Layout
