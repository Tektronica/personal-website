import Head from 'next/head'
import Layout from '../../components/templates/Layout'
import { connectToDatabase } from '../../lib/mongodb'
import ExampleWithLightbox from '../../components/ExampleWithLightbox';

export default function Album({ photos }) {

    return (
        <div className="flex flex-col justify-center min-h-screen">
            <Head>
                {/* <title>Placeholder</title> */}
                <title>{photos[0].album}</title>
            </Head>
            
            <h1 className="text-6xl font-bold uppercase">
                {/* Placeholder */}
                {photos[0].album.replace('-', ' ')}
            </h1>

            <article>

                {/* react-photo-gallery */}
                {/* Lazy load? */}
                <ExampleWithLightbox photos={photos} />

            </article>
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

    const { db } = await connectToDatabase();
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