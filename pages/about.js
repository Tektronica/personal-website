import Head from 'next/head'
import Layout from '../components/templates/Layout'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-left justify-top w-full flex-1 px-20 text-left">
                <h1 className="text-6xl font-bold">
                    About.
                </h1>

                <p className="mt-3 text-2xl">
                    This will be about us!
                </p>
            </main>
        </div>
    )
}

Home.layout = Layout
