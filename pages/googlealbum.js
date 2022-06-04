import Head from 'next/head'
import Layout from '../components/templates/Layout'
import Image from 'next/image'
import { connectToDatabase } from './api/mongodb-client'
// import clientPromise from './mongodb-client'

export default function About({ albums }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Album</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-left justify-top w-full flex-1 text-left">
                <h1 className="text-2xl md:text-6xl font-bold">
                    Album.
                </h1>

                {albums && albums.length > 0 && albums.map(todoList => (
                    <div key={albums.id}>
                        <a><h3>
                            {album.title}
                        </h3> </a>
                    </div>
                ))}
            </main>
        </div>
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getServerSideProps({ params }) {
    // const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    // const gallery = await res.json();
    // return { props: { photos: gallery }, };

    // retrieve google albums
    const url = 'https://photoslibrary.googleapis.com/v1/albums'
    const { albums } = await fetch(url);

    const gallery = await db
        .collection("gallery")
        .find({ album: params.album })
        .sort({ date: 1 })
        .limit(150)
        .toArray();

    return {
        props: {
            photos: JSON.parse(JSON.stringify(gallery)),
        },
    };
}

Album.layout = Layout
Album.layout = Layout
