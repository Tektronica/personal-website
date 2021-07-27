import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Layout from '../../components/templates/Layout'

export default function Post({ postData }) {

    return (
        <div className="prose min-h-screen">
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className="">{postData.title}</h1>
                <div className="">
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </div>
    )
}


export async function getStaticPaths() {
    // Return a list of possible value for id

    const paths = getAllPostIds()

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)

    return {
        props: {
            postData
        }
    }
}

Post.layout = Layout