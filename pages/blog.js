import Head from 'next/head'
import Layout from '../components/templates/Layout'
import SlimCard from "../components/Cards/SlimCard/SlimCard"
import { getAllForEachLabeled } from '../lib/posts'

export default function Blog({ allPostsData }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-left justify-top w-full flex-1 text-left">
                <h1 className="text-2xl md:text-6xl font-bold">
                    Blog.
                </h1>

                <p className="mt-3 text-lg md:text-2xl border-b border-black">
                    This is where we will talk about stuff!
                </p>
                <div className="">
                {/* https://stackoverflow.com/a/14810722/3382269 */}
                {Object.entries(allPostsData).map(([key, value]) => (
                  <div>
                    <h2 className="uppercase text-sm md:text-lg font-bold text-pink-600">
                      {key}
                    </h2>
                    <div className="">
                      {value.map(({ id, date, title, description, type }) => (
                        <div className="mb-4" key={id}>
                          <SlimCard l
                            label={title}
                            type={type}
                            path={`/posts/${id}`}
                            description={description}
                          />
                        </div>
                      ))}
                    </div>
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
    const filterString = ['travel', 'tutorial', 'tech']
    const allPostsData = getAllForEachLabeled(filterString)

    return {
        // Passed to page components as prop
        props: {
            allPostsData,
        }
    }
}

Blog.layout = Layout
