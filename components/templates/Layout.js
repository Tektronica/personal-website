import Head from 'next/head'
import Navbar from "../Header/Navbar"
import Footer from "../Footer/Footer"
import Image from "next/image"

export default function Layout({ children }) {

    // background image handled by tailwind
    const bgImageURL = "/images/iceland_background_dim_1244x484.svg"
    // const styling = {
    //     backgroundImage: `url('${bgImageURL}')`,
    //     width: "100%",
    //     height: "100%"
    // }

    return (
        <>
            {/* meta was used for google verification */}
            <Head>
                <meta name="google-site-verification" content="vJTVQgr-m2CikpQgrZ9vP9Aw09qtCSaBe-eAIGHMmpk" />
            </Head>

            {/* background image */}
            <div className="fixed bottom-0 left-0 overflow-hidden z-0">
                <Image
                    alt="iceland-village"
                    src={bgImageURL}
                    width={1244}
                    height={484}
                    objectFit="cover"
                    quality={100}
                />
            </div>

            {/* this div handles the background image */}
            {/* <div className="border-8 border-black bg-no-repeat bg-left-bottom bg-fixed" style={styling}> */}
            <div className="relative md:border-8 border-black z-50">

                {/* this div ensures the main content div is centered */}
                <div className="min-h-screen z-50 flex flex-grow md:m-4 justify-center">

                    {/* drop shadow and other characteristics of the main content div */}
                    <div className="max-w-[1200px] flex flex-col md:p-4 bg-white rounded-md shadow-xl">

                        <Navbar />
                        <div className="mb-6">
                            {children}
                        </div>
                        <Footer />

                    </div>

                </div>
            </div>
        </>
    )
}
