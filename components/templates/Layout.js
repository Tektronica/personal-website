
import Navbar from "../Header/Navbar"
import Footer from "../Footer/Footer"

export default function Layout({ children }) {
    return (
        <div className="border-8 border-black bg-white">

            <div className="container relative w-full mx-auto lg:container px-4 lg:px-4 xl:px-20 pt-5 mt-1 bg-white antialiased">

                <Navbar />

                <div className="sm:px-6 sm:px-6 mb-6 bg-white">
                    {children}
                </div>

                <Footer />

            </div>

        </div>


    )
}
