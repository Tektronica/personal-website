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
        <div className="bg-black text-white text-right pr-2 antialiased mb-6">
          <MetarsStrip MetarsData={Object.values(metarsData)[0]} />
        </div>

        <h1 className="text-6xl font-bold">
          Hello.
        </h1>

        <p className="mt-3 text-2xl border-b border-black">
          This is the Idiots travel guide.
        </p>
        <div className="border-b border-black">
          <div className="pb-2 mt-3 text-justify">
            <p>
              Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
              To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.
              Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.
              Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign.
              Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 items-center  mt-6 sm:w-full">

          {allPostsData.map(({ id, date, title }) => (
            <div className="w-full" key={id}>
              <SlimCard l
                label={title}
                color={"yellow"}
                path={`/posts/${id}`}
                description={"Instantly deploy your Next.js site to a public URL with Vercel."}
              />
            </div>
          ))}

          <SlimCard l
            label={"Documentation"}
            color={"green"}
            path={"https://nextjs.org/docs"}
            description={"Find in-depth information about Next.js features and API."}
          />

          <SlimCard l
            label={"Learn"}
            color={"blue"}
            path={"https://nextjs.org/learn"}
            description={"Learn about Next.js in an interactive course with quizzes!"}
          />

          <SlimCard l
            label={"Examples"}
            color={"pink"}
            path={"https://github.com/vercel/next.js/tree/master/examples"}
            description={"Discover and deploy boilerplate example Next.js projects."}
          />

          <SlimCard l
            label={"Deploy"}
            color={"purple"}
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

Home.layout = Layout
