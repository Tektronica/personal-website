import Head from 'next/head'
import Layout from '../components/templates/Layout'

export default function GoogleAlbum () {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>GoogleAlbum</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-left justify-top w-full flex-1 text-left">
                <h1 className="text-2xl md:text-6xl font-bold">
                    Under Construction.
                </h1>
            </main>
        </div>
    )
}

GoogleAlbum.layout = Layout
