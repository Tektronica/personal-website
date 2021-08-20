import Head from 'next/head'
import Layout from '../components/templates/Layout'
import SlimCard from "../components/Cards/SlimCard/SlimCard"
import { getMETARS } from '../lib/metars'
import MetarsStrip from "../lib/metars"
import { getAllForEachLabeled } from '../lib/posts'
import Image from 'next/image'

export default function Home({ allPostsData, metarsData }) {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-left justify-top w-full flex-1 text-left">
        <MetarsStrip MetarsData={Object.values(metarsData)[0]} />
        {/* TODO cover image */}
        <div className="">
          <Image className="" src='/images/index.jpg' width={5492} height={1800} objectFit='cover' />
        </div>
        <p className="mt-3 text-pink-600 font-bold text-lg md:text-2xl border-b border-black ">
          The Adventures of Ryan & Jessie
        </p>
        <div className="border-b border-black">
          <div className="pb-2 mt-3 text-sm sm:text-lg text-justify">

            <div className="w-full grid grid cols-1 lg:grid-cols-2 gap-4 ">
              <div className="">
                <p>
                  At some point we’ll come up with a clever name for this website, but for now,
                  fellow website-tester, consider yourself part of the “in” crowd who gets to see
                  and appreciate a work-in-progress.  At the moment, we hope you will enjoy viewing
                  our Iceland Elopement Gallery as well as an assortment of other photos documenting
                  our Honeymoon adventure through Iceland.  We’re slowly adding more and more to this
                  collection, including some writing about our adventures (journal style), and some
                  handy maps to give context to where we trekked and where some of these photos were taken!
                  <br /><br />
                  Please bear with us as we continue adding things and learning about this whole website
                  creation process.  If you have any suggestions, we’d love to hear them!
                </p>
              </div>

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
            </div>



          </div>
        </div>
        <div className="flex flex-wrap gap-4 items-center  mt-6 sm:w-full">

        </div>
      </main>
    </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {

  const filterString = ['travel', 'tutorial']
  const allPostsData = getAllForEachLabeled(filterString)
  const metarsData = await getMETARS()

  // console.log(allPostsData)
  // Object.entries(allPostsData).map(([key, value]) => (
  //   console.log('values:', value)
  // ))

  return {
    // Passed to page components as prop
    props: {
      allPostsData, metarsData
    }
  }
}

Home.layout = Layout
