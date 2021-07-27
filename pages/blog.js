import Head from 'next/head'
import Layout from '../components/templates/Layout'

export default function Blog() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-left justify-top w-full flex-1 px-20 text-left">
                <h1 className="text-6xl font-bold">
                    Blog.
                </h1>

                <p className="mt-3 text-2xl">
                    This is where we will talk about stuff!
                </p>
            </main>
        </div>
    )
}

Blog.layout = Layout
