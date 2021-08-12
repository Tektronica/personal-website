import Head from 'next/head'
// import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Layout from '../../components/templates/Layout'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import path from 'path'

import fs from 'fs'
import matter from 'gray-matter'
import dynamic from 'next/dynamic'
import CustomLink from '../../components/CustomLink'
import { postFilePaths, POSTS_PATH } from '../../lib/mdxUtils'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
    a: CustomLink,
    // It also works with dynamically-imported components, which is especially
    // useful for conditionally loading components for certain routes.
    // See the notes in README.md for more details.
    TestComponent: dynamic(() => import('../../components/TestComponent')),
    Head,
  }

export default function Post({ source }) {

    return (
        <div className="flex flex-col min-h-screen py-2">
            <Head>
                <title>{source.title}</title>
            </Head>
            <article className="pl-36 pr-36 prose prose-lg max-w-none text-justify">
                <h1 className="">{source.title}</h1>
                <div className="">
                    {/* <Date dateString={source.date} /> */}
                </div>
                <MDXRemote {...source} components={components} />
            </article>
        </div>
    )
}

const postsDirectory = path.join(process.cwd(), 'posts')

export const getStaticPaths = async () => {
    const paths = postFilePaths
      // Remove file extensions for page paths
      .map((path) => path.replace(/\.mdx?$/, ''))

      // Map the path into the static paths object required by Next.js
      .map((id) => ({ params: { id } }))
  
    return {
      paths,
      fallback: false,
    }
  }



export const getStaticProps = async ({ params }) => {
    const postFilePath = path.join(POSTS_PATH, `${params.id}.mdx`)
    const source = fs.readFileSync(postFilePath)
  
    const { content, data } = matter(source)
  
    const mdxSource = await serialize(content, {
      // Optionally pass remark/rehype plugins
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
      scope: data,
    })
  
    return {
      props: {
        source: mdxSource,
        frontMatter: data,
      },
    }
  }

Post.layout = Layout