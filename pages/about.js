import Head from 'next/head'
import Layout from '../components/templates/Layout'
import Image from 'next/image'
import { connectToDatabase } from '../lib/mongodb'

export default function About({ photo }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-left justify-top w-full flex-1 text-left">
                <h1 className="text-6xl font-bold">
                    About.
                </h1>

                <p className="mt-3 text-2xl">
                    Who are we?!
                </p>

                <Image src={photo[0].src} alt={photo[0].title} width={photo[0].width} height={photo[0].height} />

                <div className="mt-4 border-b border-b-black border-t border-t-black">
                    <h2 className="">
                        <div className="text-pink-500 font-bold inline">Title:</div>  {photo[0].title}
                    </h2>
                    <h2 className="">
                        <div className="text-pink-500 font-bold inline">Description:</div> {photo[0].description}
                    </h2>
                </div>

                <div className="pb-2 mt-3 text-justify">
                    <p>
                        We are Ryan and Jessie – we live to explore and have adventure, seeking both to appreciate a place for not only it’s natural beauty but to understand and appreciate its history and culture as well.  We’ve always known we want to travel, and are more than a little excited to finally be getting to the phase of our lives when we can do so.
                        <br /><br />
                        Both electrical engineers by training, we naturally love science and have a fairly methodical approach to most things that we do.  This has come in quite handy during the trip planning phase.  That being said, travel is a way for us to leave those bounds behind for a bit and ask the world to throw something spontaneous in our paths so that we can experience life to its fullest.  As most people know, most things never really go according to plan, and travel absolutely falls into this category.  Turns out this is one of the things we absolutely love about it.
                        <br /><br />
                        Our early career experience was somewhat along this same adventure theme, in that we lived in three separate corners of the United States – Montana, New Mexico, and Washington in the short span of three years, developing careers at each a startup company, a National Lab, and eventually major aerospace and instrumentation companies.  As couples go, we had a bit of a unique experience to be developing and pursuing identical careers for a while, each sharing an office at one point (all HR reps may gasp here!).
                        <br /><br />
                        However, in recent times, we’ve each harkened back a bit to passions which came from our “roots” as kids.  Ryan has been fostering his interest in programming and computer science in general, looking to combine that methodical side into his strong creative streak.  That’s where this website stemmed from, in fact, and all the photos you see here are carefully edited by him to preserve the natural beauty of the place as best he can, while also conveying how it felt to be standing there.
                        <br /><br />
                        Having had the full early engineering career experience, Jess has refocused her attention as of late to becoming a pilot.  Learning to fly was a life-long desire, and having the opportunity to do so come up has been a dream come true, to say the least.  Eventually she hopes to share some of that adventure on this website as well.  In the meantime, she thoroughly enjoys spending her free time doing another of her life-long passions, writing, in the form of content for this website.
                        <br /><br />
                        When we aren’t traveling, plotting our next travel adventure, flying, photographing, writing, or building websites, you can find us engaged in a various assortment of other activities, because we seriously have way too many interests.  Some of which maybe we’ll get around to writing about and adding to the website?  Well, we’ll just take it step by step.
                    </p>
                </div>


            </main>
        </div>
    )
}

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
