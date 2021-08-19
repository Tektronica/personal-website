import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'


// default post directory location
const postsDirectory = path.join(process.cwd(), 'posts')


// Skim default post directory for markdown files
export function getMarkdownFiles() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
}


// Get the markdown content from each file found
export function readMarkdown(fileName) {
    const fullPath = path.join(postsDirectory, fileName)
    return fs.readFileSync(fullPath, 'utf8')
}


// get gray matter (front matter) metadata content
export function getMatterResults() {
    return getMarkdownFiles()
        .map(fileName => {
            // Remove ".md" from file name to get id
            const id = fileName.replace(/\.(md|mdx)$/, '')

            // Read markdown file as string
            const fileContents = readMarkdown(fileName)

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents)

            // Combine the data with the id
            return {
                id,
                ...matterResult.data
            }
        })
}


// Filter for only specific content
export function filterPosts(data, filterString) {
    return data.filter((t) => t.type.includes(filterString))
}


// Sort all available items within object by date
export function sortPosts(allData) {
    return allData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1
        } else if (a > b) {
            return -1
        } else {
            return 0
        }
    })
}



// return all sorted posts
export function getSortedPostsData() {
    // Get object containing structured metadata for each available markdown files
    const allPostsData = getMatterResults()

    // Sort posts by date
    return sortPosts(allPostsData)
}


// return all sorted posts that have specific content type (ie type: 'travel')
export function getSortedPostsSpecific(filterString) {
    // Get object containing structured metadata for each available markdown files
    const allPostsData = getMatterResults()

    // Remove files we don't care about using a filter
    const filteredResult = filterPosts(allPostsData, filterString)

    // Sort posts by date
    return sortPosts(filteredResult)
}

// return all sorted posts that have specific content type (ie type: 'travel')
export function getAllForEach(filterList) {
    // Get object containing structured metadata for each available markdown files
    const allPostsData = getMatterResults()
    var filteredResult = []
    var sortedResult = []

    // Remove files we don't care about using a filter
    for (const filterString of filterList) {
        filteredResult = filterPosts(allPostsData, filterString)

        // Sort post group by date
        sortedResult = sortedResult.concat(sortPosts(filteredResult))
    }
    
    return sortedResult

    // [
    //     {
    //         id: 'legally-married',
    //         title: 'Getting Legally Married Abroad',
    //         date: '2020-08-01',
    //         description: 'So you want to get married abroad?',
    //         type: 'travel'
    //     },
    //     {
    //         id: 'link-headings',
    //         title: 'Linked Headings using rehype',
    //         date: '2021-08-17',
    //         description: 'rehype plugins are a powerful way to supercharge your blogs!',
    //         type: 'tutorial'
    //     },
    //     {
    //         id: 'masonry-gallery',
    //         title: 'Masonry Layout in NextJS ',
    //         date: '2021-08-17',
    //         description: 'There are tons of implementations for pinboard-style image galleries!',
    //         type: 'tutorial'
    //     },
    //     {
    //         id: 'responsive-hamburgers',
    //         title: 'Responsive Hamburger Menus',
    //         date: '2021-08-17',
    //         description: 'Navigation bars responsive to window size using hamburgers!',
    //         type: 'tutorial'
    //     }
    // ]

}

// return all sorted posts that have specific content type (ie type: 'travel')
export function getAllForEachLabeled(filterList) {

    // Get object containing structured metadata for each available markdown files
    const allPostsData = getMatterResults()
    var filteredResult = []
    var entry = {}
    var sortedResult = {}

    // Remove files we don't care about using a filter
    for (const filterString of filterList) {
        filteredResult = filterPosts(allPostsData, filterString)
        
        // Key value pair
        entry = {[filterString]: sortPosts(filteredResult)}

        // Sort post group by date and concatenate to end of array
        sortedResult[filterString] = sortPosts(filteredResult)
    }
    
    return sortedResult

    // {
    //     travel: [
    //         {
    //             id: 'legally-married',
    //             title: 'Getting Legally Married Abroad',
    //             date: '2020-08-01',
    //             description: 'So you want to get married abroad?',
    //             type: 'travel'
    //         }
    //     ],
    //     tutorial: [
    //         {
    //             id: 'link-headings',
    //             title: 'Linked Headings using rehype',
    //             date: '2021-08-17',
    //             description: 'rehype plugins are a powerful way to supercharge your blogs!',
    //             type: 'tutorial'
    //         },
    //         {
    //             id: 'masonry-gallery',
    //             title: 'Masonry Layout in NextJS ',
    //             date: '2021-08-17',
    //             description: 'There are tons of implementations for pinboard-style image galleries!',
    //             type: 'tutorial'
    //         },
    //         {
    //             id: 'responsive-hamburgers',
    //             title: 'Responsive Hamburger Menus',
    //             date: '2021-08-17',
    //             description: 'Navigation bars responsive to window size using hamburgers!',
    //             type: 'tutorial'
    //         }
    //     ]
    // }

}



export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdwon into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}


export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}
