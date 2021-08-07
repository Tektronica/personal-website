import Head from 'next/head'
import Layout from '../components/templates/Layout'
import { connectToDatabase } from '../lib/mongodb'
import PreviewCard from '../components/Cards/GalleryCard/PreviewCard'
import Album from './album/[album]'

export default function GalleryPage({ albums }) {

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
                <div className='pt-2 flex flex-wrap gap-4'>
                    {albums.map(album => (
                        <div key={album._id}>
                            <PreviewCard
                                imgSrc={album.src}
                                title={album._id.replace('-', ' ')}
                                subtitle={album.count + " images available"}
                                body='Example body'
                                url={`/album/${album._id}`}
                                width={album.width}
                                height={album.height}
                            />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getServerSideProps() {
    const { db } = await connectToDatabase();

    // Get distinct album names
    // const albums = await db
    //     .collection("gallery")
    //     .distinct("album")

    // Get random document of distinct album value
    const albums = await db
        .collection("gallery")
        .aggregate([
            // First Stage
            /**
             * _id: The id of the group.
             * count: counts number of documents within each group
             * src: finds first value for src field within each group
             */
            // https://stackoverflow.com/a/62950842
            {
                $group:
                {
                    _id: "$album",
                    count: { $sum: 1 },
                    src: { $first: "$src" },
                    width: { $first: "$width" },
                    height: { $first: "$height" },
                }
            }
        ]).toArray()

    console.log(albums)
    return {
        props: {
            albums: JSON.parse(JSON.stringify(albums)),
        },
    };
}

GalleryPage.layout = Layout
