import Head from 'next/head'
import Layout from '../components/templates/Layout'


export default function Highlights() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Highlights</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-left justify-top w-full flex-1 text-left">
                <h1 className="text-2xl md:text-6xl font-bold">
                    Highlights.
                </h1>

                <div className="pb-2 mt-3 text-sm sm:text-lg text-justify">
                    <body>
                        <p>Our journey was a craving for adventure, a taste for wonder, a thirst for exploration which captivated our hearts.  Iceland with all its ancient mysticism and awe, felt as home to our new name as Bryson and we ardently shed the layers which had so entirely compressed us down in the years of planning.  Our Iceland elopement was truly the trip of a lifetime, and we feel so lucky to have been able to experience this adventure, and to tie it into our wedding.  Although several months have gone by, both of us still fondly think back to last July and relish in one of the thousands of memories we now share as one.</p>
                    </body>
                </div>

                <div className='grid place-items-center'>
                    <div>
                        <iframe src="https://www.google.com/maps/d/embed?mid=1idyt4fC14-3r76cmcubZI567lDFYC4Ac&ehbc=2E312F" width="640" height="480"></iframe>
                    </div>
                </div>
            </main>
        </div>
    )
}

Highlights.layout = Layout
