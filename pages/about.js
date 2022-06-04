import Head from 'next/head'
import Layout from '../components/templates/Layout'
import Image from 'next/image'
import { connectToDatabase } from './api/mongodb-client'
// import clientPromise from './mongodb-client'

export default function About({ photo }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-left justify-top w-full flex-1 text-left">
                <h1 className="text-2xl md:text-6xl font-bold">
                    About.
                </h1>

                <p className="mt-3 text-lg md:text-2xl border-b border-black">
                    Who are we?!
                </p>

                <Image src={photo[0].src} alt={photo[0].title} width={photo[0].width} height={photo[0].height} />

                <div className="mt-4 border-b border-b-black border-t border-t-black">
                    <h2 className="text-sm sm:text-lg">
                        <div className="text-pink-500 font-bold inline">Title:</div>  {photo[0].title}
                    </h2>
                    <h2 className="text-sm sm:text-lg">
                        <div className="text-pink-500 font-bold inline">Description:</div> {photo[0].description}
                    </h2>
                </div>

                <div className="pb-2 mt-3 text-sm sm:text-lg text-justify">
                    <p>
                        We are Ryan and Jessie - we live to explore and have adventure, seeking both to appreciate a place for not only its natural beauty but to understand and appreciate its history and culture as well. Getting married in Iceland was truly a dream come true, an adventure worth every moment, and we would do it again in a heartbeat.
                        <br /><br />
                        Both electrical engineers by training, our adventure seeking has effectively spilled over into our careers as we have moved between Montana, New Mexico, and Washington several times in the last decade. We have a list a few miles long of friends and memories we've made in each place, and we cherish them all!
                        <br /><br />
                        Ryan's true passion in life is to view the world through all the senses. Whether it's scaling the hills of Landmannalaugar with only a protein bar and pouring sweat, or kayaking “the wrong way” (upstream) at Seeley Lake, you will always find him engaged with the world. Usually with his trusty camera at hand, since he loves photography. He is also a lifetime player of the piano, and he loves a good software challenge… which is why this website exists!
                        <br /><br />
                        Jess is a private pilot, and she doesn't even remember a time when she was not obsessed with everything about flight, space, and airplanes. She loves to constantly be learning something and aviation happily lives up to that requirement. When the weather isn't cooperating for a flight, hike, or kayak trip with Ryan, she can be found either reading like a fiend, knitting up a storm, or determining what the next place we should visit is. She also really loves to write… which bodes well for this website.
                    </p>
                </div>


            </main>
        </div>
    )
}

// // Handler
// module.exports = async (req, res) => {
//     // define dependencies and modules

//     // Get the MongoClient by calling await on the promise.
//     // Because it is a promise, it will only resolve once.
//     const client = await clientPromise;

//     // Use the connection to return the name of the connected database.
//     // res.status(200).json({ dbName: client.db().databaseName });
//     return client.db().databaseName;
// }

export async function getServerSideProps() {
    const { db } = await connectToDatabase();
    const gallery = await db
        .collection("gallery")
        .find({ album: 'iceland', title: 'The duo' })
        .sort({ date: 1 })
        .limit(1)
        .toArray();

    return {
        props: {
            photo: JSON.parse(JSON.stringify(gallery)),
        },
    };
}

About.layout = Layout
