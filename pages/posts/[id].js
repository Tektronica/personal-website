import Head from "next/head"
// import { getAllPostIds, getPostData } from "../../lib/posts"
import Date from "../../components/date"
import Layout from "../../components/templates/Layout"
import path from "path"

import fs from "fs"
import matter from "gray-matter"
import { postFilePaths, POSTS_PATH } from "../../lib/mdxUtils"
import Link from "next/link"
import Image from "next/image"

// mdx parser
import { MDXRemote, MDXProvider } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"

// syntax highlighting
import rehypePrism from "@mapbox/rehype-prism"
// import rehypeHighlight from 'rehype-highlight'

// added autolink headers. header id's needed. using rehypeslug for help
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

// Sanitize html to prevent cross-site scripting (xss) attack
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import deepmerge from 'deepmerge'
const schema = deepmerge(defaultSchema, { tagNames: ['math', 'mi'] })

import { s } from 'hastscript'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren"t loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  // Image: dynamic(() => import("next/image")),
  img: (props) => <img className="mx-auto" {...props}></img>,
  Image: (props) => (
    // height and width are part of the props, so they get automatically passed here with {...props}
    <div className="flex flex-wrap justify-center"><Image {...props} layout="" loading="lazy" /></div>),
}

// https://github.com/remarkjs/remark/discussions/530#discussioncomment-63715
function link() {
  return s(
    "svg.icon",
    {
      ariaHidden: "true",
      viewBox: [0, 0, 24, 24],
      focusable: false,
      width: 18,
      height: 18,
      fill: "none",
      className: "stroke-current text-gray-600"
    },
    s("path", {
      "stroke-linecap": "round",
      "stroke-width": 2,
      "stroke-linejoin": "round",
      d:
        "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
    })
  );
}

export default function Post({ source, frontMatter }) {

  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <article className="md:pl-36 md:pr-36 prose max-w-none text-justify">
        <h1 className="">{frontMatter.title}</h1>
        <div className="">
          <Date dateString={frontMatter.date} />
        </div>

        <MDXRemote {...source} components={components} />

        <div className="pt-4 text-lg"><Link href="/blog"><a> ◀ Back to articles</a></Link></div>
      </article>
    </div>
  )
}

const postsDirectory = path.join(process.cwd(), "posts")

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))

    // Map the path into the static paths object required by Next.js
    .map((id) => ({ params: { id } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  var source = "";

  try {
    const postFilePath = path.join(POSTS_PATH, `${params.id}.mdx`)
    source = fs.readFileSync(postFilePath)
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log(`markdown file with extension .mdx could not be found. Attempting to open a possible .md version`);
      const postFilePath = path.join(POSTS_PATH, `${params.id}.mdx`)
      source = fs.readFileSync(postFilePath)
    } else {
      throw err;
    }
  }

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [
        // import prism css theme in _app.js
        rehypePrism,
        rehypeSlug,
        [rehypeAutolinkHeadings, {
          behavior: "append",
          properties: {
            ariaLabel: "Link to self",
            className: ["anchor"]
          },
          content: link
        }],
        // rehypeSanitize, schema
      ],
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

