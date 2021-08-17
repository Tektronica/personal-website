import Head from 'next/head'
import Layout from '../components/templates/Layout'
import SlimCard from "../components/Cards/SlimCard/SlimCard"
import { getSortedPostsData } from '../lib/posts'

export default function Blog({ allPostsData }) {
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
                <div className="flex flex-wrap gap-4 items-center  mt-6 sm:w-full">
                    {allPostsData.map(({ id, date, title, description, type }) => (
                        <div className="w-full" key={id}>
                            <SlimCard l
                                label={ title }
                                type={ type }
                                path={ `/posts/${id}` }
                                description={description}
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
export async function getStaticProps() {
    const allPostsData = getSortedPostsData()

    return {
        // Passed to page components as prop
        props: {
            allPostsData,
        }
    }
}

Blog.layout = Layout
