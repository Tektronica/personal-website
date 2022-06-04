import Head from 'next/head'
import Layout from '../components/templates/Layout'
import SlimCard from "../components/Cards/SlimCard/SlimCard"
import { getMETARS } from './api/metars'
import MetarsStrip from "./api/metars"
import { getAllForEachLabeled } from '../lib/posts'
import Image from 'next/image'

export default function Home({ allPostsData, metarsData }) {

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-left justify-top w-full flex-1 text-left">
        <MetarsStrip MetarsData={Object.values(metarsData)[0]} />
        {/* TODO cover image */}
        <div className="w-full overflow-hidden relative" style={{ height: '50vh' }}>
          {/* width={5492} height={1800}  */}
          <Image className="" src='/images/index.jpg' layout="fill" objectFit={"cover"} />
        </div>
        <p className="mt-3 text-pink-600 font-bold text-lg md:text-2xl border-b border-black ">
          The Adventures of Ryan & Jessie
        </p>
        <div className="border-b border-black">
          <div className="pb-2 mt-3 text-sm sm:text-lg text-justify">

            <div className="w-full grid grid cols-1 lg:grid-cols-2 gap-4 ">
              <div className="">
                  <p>On July 4th, 2021, Jessie and Ryan embarked the hallowed voyage into marriage as Bryson’s; handfasted in Iceland.
                    <br /><br />
                    On a beautiful July day which brought morning mist and crystal blue afternoon skies, we were married in Iceland along the coastlines of Reykjavík. We marched across the Snæfellsnes peninsula, swept off our feet by the beauty of Kirkjufell mountain and our breath taken by mystical beauty of lands forged in fire by volcanic eruptions. These ancient lands were our guides transcending time itself as we took our first steps as one. We overcame foreign lands, culture, and language, yet found peace in the unique bond we shared in the company of others.
                  </p>
              </div>

              <div className="">
                {/* https://stackoverflow.com/a/14810722/3382269 */}
                {Object.entries(allPostsData).map(([key, value]) => (
                  <div key={key}>
                    <h2 className="uppercase text-sm md:text-lg font-bold text-pink-600">
                      {key}
                    </h2>
                    <div className="">
                      {value.map(({ id, date, title, description, type }) => (
                        <div className="mb-4" key={id}>
                          <SlimCard
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
    </>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getServerSideProps() {

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
