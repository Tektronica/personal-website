import Head from 'next/head'
import Layout from '../components/templates/Layout'
import Link from 'next/link'

export default function Highlights() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Highlights</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-left justify-top w-full flex-1 text-left">
                <h1 className="text-2xl md:text-6xl font-bold border-b mb-4">
                    Highlights
                </h1>
                <div className='px-2 md:px-0'>
                    <div className="pb-2 mt-3 text-sm sm:text-lg text-justify">
                        <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-slate-900
                                  first-letter:mr-2 first-letter:float-left">
                            Our journey was a craving for adventure, a taste for wonder, a thirst for exploration which captivated our hearts.  Iceland with all its ancient mysticism and awe, felt as home to our new name as Bryson and we ardently shed the layers which had so entirely compressed us down in the years of planning.  Our Iceland elopement was truly the trip of a lifetime, and we feel so lucky to have been able to experience this adventure, and to tie it into our wedding.  Although several months have gone by, both of us still fondly think back to last July and relish in one of the thousands of memories we now share as one.
                        </p>

                        <div className="pt-4 pb-4 font-bold">
                            <div className="pl-4 border-b hover:pb-2 hover:pt-2 hover:text-white hover:rounded-xl transition-all duration-200 hover:bg-gradient-to-tl hover:from-pink-500 hover:via-red-500 hover:to-yellow-400">
                                <Link href="/posts/ceremony">
                                    Our Ceremony in Grótta, Iceland
                                </Link>
                            </div>
                            <div className="pl-4 border-b hover:pb-2 hover:pt-2 hover:text-white hover:rounded-xl transition-all duration-200 hover:bg-gradient-to-tl hover:from-pink-500 hover:via-red-500 hover:to-yellow-400">
                                <Link href="/posts/ceremony">
                                    Siðmennt, the Icelandic Ethical Humanist Association
                                </Link>
                            </div>
                            <div className="pl-4 border-b hover:pb-2 hover:pt-2 hover:text-white hover:rounded-xl transition-all duration-200 hover:bg-gradient-to-tl hover:from-pink-500 hover:via-red-500 hover:to-yellow-400">
                                <Link href="/posts/planning-elopement">
                                    Why did we choose to elope in Iceland?
                                </Link>
                            </div>
                            <div className="pl-4 border-b hover:pb-2 hover:pt-2 hover:text-white hover:rounded-xl transition-all duration-200 hover:bg-gradient-to-tl hover:from-pink-500 hover:via-red-500 hover:to-yellow-400">
                                <Link href="/posts/wedding-dress">
                                    Designing a wedding dress
                                </Link>
                            </div>
                            <div className="pl-4 border-b hover:pb-2 hover:pt-2 hover:text-white hover:rounded-xl transition-all duration-200 hover:bg-gradient-to-tl hover:from-pink-500 hover:via-red-500 hover:to-yellow-400">
                                <Link href="/posts/legally-married">
                                    Getting a marriage license abroad
                                </Link>
                            </div>
                            <div className="pl-4 border-b hover:pb-2 hover:pt-2 hover:text-white hover:rounded-xl transition-all duration-200 hover:bg-gradient-to-tl hover:from-pink-500 hover:via-red-500 hover:to-yellow-400">
                                <Link href="/posts/ceremony">
                                    Handmaking wedding bands
                                </Link>
                            </div>
                            <div className="pl-4 border-b hover:pb-2 hover:pt-2 hover:text-white hover:rounded-xl transition-all duration-200 hover:bg-gradient-to-tl hover:from-pink-500 hover:via-red-500 hover:to-yellow-400">
                                <Link href="/posts/ceremony">
                                    Travel Journal
                                </Link>
                            </div>
                        </div>

                        <div className="pt-4 pb-4 font-bold">
                            <div className="pl-4 border-b hover:pb-2 hover:pt-2 hover:text-white hover:rounded-xl transition-all duration-200 hover:bg-gradient-to-tl hover:from-pink-500 hover:via-red-500 hover:to-yellow-400">
                                <Link href="/posts/ceremony">
                                    Coffee in Iceland
                                </Link>
                            </div>
                            <div className="pl-4 border-b hover:pb-2 hover:pt-2 hover:text-white hover:rounded-xl transition-all duration-200 hover:bg-gradient-to-tl hover:from-pink-500 hover:via-red-500 hover:to-yellow-400">
                                <Link href="/posts/ceremony">
                                    Hiking to Glymur
                                </Link>
                            </div>
                            <div className="pl-4 border-b hover:pb-2 hover:pt-2 hover:text-white hover:rounded-xl transition-all duration-200 hover:bg-gradient-to-tl hover:from-pink-500 hover:via-red-500 hover:to-yellow-400">
                                <Link href="/posts/ceremony">
                                    Exploring Landmannalaugar
                                </Link>
                            </div>
                            <div className="pl-4 border-b hover:pb-2 hover:pt-2 hover:text-white hover:rounded-xl transition-all duration-200 hover:bg-gradient-to-tl hover:from-pink-500 hover:via-red-500 hover:to-yellow-400">
                                <Link href="/posts/ceremony">
                                    The Handknitting Association of Iceland (and wool/knitting in general)
                                </Link>
                            </div>
                            <div className="pl-4 border-b hover:pb-2 hover:pt-2 hover:text-white hover:rounded-xl transition-all duration-200 hover:bg-gradient-to-tl hover:from-pink-500 hover:via-red-500 hover:to-yellow-400">
                                <Link href="/posts/ceremony">
                                    Fire & Ice: From climbing Falljökull Glacier to experiencing the Geldingadalir volcano
                                </Link>
                            </div>

                        </div>
                    </div>

                    {/* google maps iframe */}
                    <div className="google-maps flex flex-grow md:m-4 justify-center">
                        <iframe
                            className="google-maps"
                            src="https://www.google.com/maps/d/embed?mid=1idyt4fC14-3r76cmcubZI567lDFYC4Ac&ehbc=2E312F"
                            width="640"
                            height="480"
                            allowFullScreen=""
                            loading="lazy"
                        >
                        </iframe>
                    </div>
                </div>
            </main>
        </div>
    )
}

Highlights.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
