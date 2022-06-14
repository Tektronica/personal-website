import Head from 'next/head'
import Layout from '../../components/templates/Layout'
import ResponsiveMasonryLightbox from '../../components/masonry-lightbox';
import { B2 } from '../api/backblaze-client'

export default function Album({ gallery }) {
    var galleryLink = null
    const album = gallery.album

    if (album == 'honeymoon') {
        galleryLink = "https://photos.app.goo.gl/ALmr5BYHsLZ9i98x9"
    } else {
        galleryLink = 'https://photos.app.goo.gl/fqzXyJA86RCNAw278'
    }

    return (
        <>
            <Head>
                {/* <title>Placeholder</title> */}
                <title>{album}</title>
            </Head>

            <div className="flex flex-col justify-center min-h-screen">

                <h1 className="text-2xl md:text-6xl font-bold uppercase">
                    {/* Placeholder */}
                    {album.replace('-', ' ')}
                </h1>

                {/* BRUTAL BUTTON */}
                <div className="flex grow justify-center">
                    <div className="pt-8 pb-8 font-bold uppercase">
                        <a href={galleryLink}
                            className="hover:text-blue-500 focus:text-blue-600"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className={`pl-4 pr-4 pt-2 pb-2 text-center text-xl md:text-2xl bg-pink-200 border cursor-pointer border-black uppercase box-shadow-black`} >
                                See Full Album
                            </div>
                        </a>

                    </div>
                </div>
                <article>
                    {/* react-photo-gallery */}
                    {/* Lazy load? */}
                    <ResponsiveMasonryLightbox photos={gallery.images} />
                </article>
            </div>
        </>
    )
}

// args:
// - b2 client
// - album name
async function getImages(args) {
    const B2client = args.client

    // Lists the names of all files in a bucket, starting at a given name.
    const fileObject = await B2client.listFileNames(`iceland/${args.album}/`)

    const files = fileObject.files
    var images = []

    // iterate over array of objects recieved from B2 API
    const re = /[^_]*\dx\d*[^_\.|^_]/gi;

    files.forEach((file, idx) => {
        if (file.contentType != 'text/plain') {
            // prepare object but exclude .bzEmpty file
            const fileName = file.fileName
            const dim = fileName.match(re)[0].split('x');
            const image = { 'src': B2client.b2Path + file.fileName, 'width': dim[0], 'height': dim[1], alt: '', index: idx }

            // push to array of objects
            images.push(image)
        }
    });

    return images
}

export async function getStaticPaths() {
    const paths = [
        { params: { album: 'honeymoon' } },
        { params: { album: 'elopement' } },
    ]

    return {
        paths,
        fallback: false,
    }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps({ params }) {
    // const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    // const gallery = await res.json();
    // return { props: { photos: gallery }, };

    var B2client = new B2();
    const B2auth = await B2client.connectToBackblaze();
    const images = await getImages({ 'client': B2client, 'album': params.album });

    return {
        props: {
            gallery: {
                album: params.album,
                images: JSON.parse(JSON.stringify(images)),
            },
        },
    };
}

Album.layout = Layout