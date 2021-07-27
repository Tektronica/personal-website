
import Navbar from "../Header/Navbar"
import Footer from "../Footer/Footer"

export default function Layout({ children }) {
    return (
        <div className="border-8 border-black bg-white antialiased">
            <div className="ml-36 mr-36 bg-white antialiased">

                <Navbar />

                <div className="mb-6 bg-white">
                    {children}
                </div>
                
                <Footer />
                
            </div>

        </div>


    )
}
