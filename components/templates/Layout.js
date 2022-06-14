
import Navbar from "../Header/Navbar"
import Footer from "../Footer/Footer"
import Image from "next/image"

export default function Layout({ children }) {

    // background image handled by tailwind
    const bgImageURL = "/images/iceland_background_dim_1244x484.svg"
    const styling = {
        backgroundImage: `url('${bgImageURL}')`,
        width: "100%",
        height: "100%"
    }

    return (
        <>
            {/* this div handles the background image */}
            <div className="border-8 border-black bg-no-repeat bg-left-bottom bg-fixed" style={styling}>
                {/* <Image src={bgImageURL} height={1244} width={484} /> */}

                {/* this div ensures the main content div is centered */}
                <div className="flex flex-grow md:m-4 justify-center">
                    {/* drop shadow and other characteristics of the main content div */}
                    <div className="max-w-[1200px] w-full p-4 bg-white rounded-md shadow-xl">

                        {/* start of top navigation bar */}
                        <Navbar />

                        <div className="sm:px-6 sm:px-6 mb-6">
                            {children}
                        </div>

                        {/* start footer */}
                        <Footer />
                    </div>

                </div>
            </div>
        </>
    )
}
