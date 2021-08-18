import Link from "next/link"
import Image from "next/image"
import ImageWithFallback from "../../../lib/image-with-fallback";

const inlineStyle = {
    boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
};


const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)
    
const PreviewCard = (props) => {

    return (
        <>
        <Link href={props.url}>
            <div className="border border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover-trigger">
                <ImageWithFallback
                    className="max-w-full h-auto md:h-48"
                    src={props.imgSrc}
                    alt={props.id}
                    width={300}
                    height={props.height * 300 / props.width}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                    fallbackSrc={`https://via.placeholder.com/${300}x${Math.round(props.height * 300 / props.width)}/FFAF00/000000?Text=Broken+Link!`}
                />
                <div className="p-2 ">
                    <div className="hover-target uppercase text-lg">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="hover-target text-sm text-gray-400 text-italic">
                        <h3>{props.subtitle}</h3>
                    </div>
                    <div className="text-blue-600 hover:text-purple-500">
                        <a>View More...</a>
                    </div>
                </div>
            </div>
            </Link>
        </>
    );
}

export default PreviewCard