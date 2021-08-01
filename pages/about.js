import Head from 'next/head'
import Layout from '../components/templates/Layout'
import Image from 'next/image'
import { connectToDatabase } from '../lib/mongodb'

export default function About({ isConnected }) {
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

                <Image
                    src="https://jr-portfolio.s3.us-west-002.backblazeb2.com/gallery/elopement/R_J_SNEAKS-70.jpg"
                    alt="4_zf23bb236ad7ee79479af0014_f11427750dbb14e6c_d20210727_m220034_c002_v0001143_t0014"
                    width={500}
                    height={500}
                />

                {isConnected ? (
                    <h2 className="subtitle">You are connected to MongoDB</h2>
                ) : (
                    <h2 className="subtitle">
                        You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
                        for instructions.
                    </h2>
                )}
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { client } = await connectToDatabase()
  
    const isConnected = await client.isConnected()
  
    return {
      props: { isConnected },
    }
  }

About.layout = Layout
