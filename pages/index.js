import Head from 'next/head'
import Layout from '../components/templates/Layout'
import SlimCard from "../components/Cards/SlimCard/SlimCard"
import { getMETARS } from '../lib/metars'
import MetarsStrip from "../lib/metars"
import { getSortedPostsData } from '../lib/posts'


export default function Home({ allPostsData, metarsData }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-left justify-top w-full flex-1 text-left">
        <MetarsStrip MetarsData={Object.values(metarsData)[0]} />

        <h1 className="text-6xl font-bold">
          Welcome!
        </h1>

        <p className="mt-3 text-2xl border-b border-black">
          To the Adventures of Ryan & Jessie
        </p>
        <div className="border-b border-black">
          <div className="pb-2 mt-3 text-justify">
            <p>
              At some point we’ll come up with a clever name for this website, but for now, fellow website-tester, consider yourself part of the “in” crowd who gets to see and appreciate a work-in-progress.  At the moment, we hope you will enjoy viewing our Iceland Elopement Gallery as well as an assortment of other photos documenting our Honeymoon adventure through Iceland.  We’re slowly adding more and more to this collection, including some writing about our adventures (journal style), and some handy maps to give context to where we trekked and where some of these photos were taken!
              <br /><br />
              Please bear with us as we continue adding things and learning about this whole website creation process.  If you have any suggestions, we’d love to hear them!
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 items-center  mt-6 sm:w-full">

          {allPostsData.map(({ id, date, title, description, type}) => (
            <div className="w-full" key={id}>
              <SlimCard l
                label={ title }
                type={ type }
                path={ `/posts/${id}` }
                description={description}
              />
            </div>
          ))}

          <SlimCard l
            label={"Documentation"}
            type={ 'website' }
            path={"https://nextjs.org/docs"}
            description={"Find in-depth information about Next.js features and API."}
          />

          <SlimCard l
            label={"Learn"}
            type={ 'website' }
            path={"https://nextjs.org/learn"}
            description={"Learn about Next.js in an interactive course with quizzes!"}
          />

          <SlimCard l
            label={"Examples"}
            type={ 'website' }
            path={"https://github.com/vercel/next.js/tree/master/examples"}
            description={"Discover and deploy boilerplate example Next.js projects."}
          />

          <SlimCard l
            label={"Deploy"}
            type={ 'website' }
            path={"https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"}
            description={"Instantly deploy your Next.js site to a public URL with Vercel."}
          />
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
  const metarsData = await getMETARS()

  return {
    // Passed to page components as prop
    props: {
      allPostsData, metarsData
    }
  }
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   const metarsData = await getMETARS()

//   return {
//     // Passed to page components as prop
//     props: {
//       allPostsData, metarsData
//     }
//   }
// }

Home.layout = Layout
