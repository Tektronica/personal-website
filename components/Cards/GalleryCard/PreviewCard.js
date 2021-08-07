import Link from "next/link"
import Image from "next/image"

const inlineStyle = {
    boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
};

const PreviewCard = (props) => {

    return (
        <>
            <div className="border border-black
             transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover-trigger">
                <Image
                    className="max-w-full h-auto md:h-48"
                    src={props.imgSrc}
                    alt={props.id}
                    width={300}
                    height={props.height * 300/props.width}
                    priority={true}
                />
                <div className="p-2 ">
                    <div className="hover-target uppercase text-lg">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="hover-target text-sm text-gray-400 text-italic">
                        <h3>{props.subtitle}</h3>
                    </div>
                    <div className="text-blue-600 hover:text-purple-500">
                        <Link href={props.url}><a>View More...</a></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PreviewCard