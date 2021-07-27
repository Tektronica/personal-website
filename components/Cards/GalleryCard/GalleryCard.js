import Link from "next/link"
import Image from "next/image"
const GalleryCard = (props) => {
    // Ensure hostname in the URL is defined in the next.config.js for images
    return (
        <>
            <div className="p-4 border border-black bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover-trigger">
                <Image
                    src={props.photoURL}
                    alt={props.id}
                    width={500}
                    height={500}
                />
                <div className="hover-target">
                    <h2>Title: {props.title}</h2>
                </div>
            </div>
        </>
    )
}

export default GalleryCard