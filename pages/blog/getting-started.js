import utilStyles from '../../styles/utils.module.css'
import Layout from "../../components/layout"
import Link from 'next/link'

//+metadata
let metadata = {
    "title": "Your First Page",
    "desc": "",
    "date": "2022-01-25",
    "image": "/images/thumbnail.jpg",
    "tags": ["guide", "getting-started"]
}

const subText = 'Creating your first blog post'
const myFirstPageContent = `
import utilStyles from '../../styles/utils.module.css'
import Layout from "../../components/layout"

//+metadata
let metadata = {
    "title": "My First Page",
    "date": "2022-01-26",
    "image": "/images/thumbnail.jpg",
    "tags": ["getting-started"]
}

const subText = 'First Post, Nothing Special'
export default function Post() {
    return (        
        <Layout headerText={metadata.title} subText={subText}>            
            <div className={utilStyles.flexWrapContainer}>                
                Hi, this is my first page!
            </div>
        </Layout>
    )
}
`

export default function Post() {
    return (        
        <Layout headerText={metadata.title} subText={subText}>            
            <div className={utilStyles.flexWrapContainer}>                
                <div>
                    {`This post describes how to add a new blog post to the site. All pages in the site are JSX components defined
                    in the /pages/blog/ directory, and may be nested in further subdirectories. The template is built using `}
                    <Link href='https://nextjs.org/docs/getting-started'>Next JS Framework</Link>{`, and if you don't know Next JS,
                    you may want to familiarize yourself with it.`}
                    <br/><br/>
                    {`To get started, create a new file called 'my-first-page.js' in the /pages/blog/ directory.
                    and place the following content inside:`}
                </div>
                <pre>{myFirstPageContent}</pre>
                <div className={utilStyles.justifyCenter}>
                    {`After you've created the new file, restart the development server to reload the page metadata.
                    Once the server has started again, your page should be visible on the homepage.`}
                </div>
                <br/><br/>
                <div className={utilStyles.justifyCenter}>
                    {`Each user page must be a JSX component, and should contain a metadata object as defined by the '//+metadata' 
                    comment. The metadata object is used by the site to populate the 'Posts' section of the homepage. Let's look
                    a bit more in detail at the metadata object:`}
                </div>
                <ul>
                    <li><b>title:</b>{` text that appears on the cover image of a post, and on the main page under 
                    the post's thumbnail.`}</li>
                    <li><b>date:</b>{` the post's publish date, appears on the main page under the thumbnail. Date is used for
                    post sorting.`}</li>
                    <li><b>image:</b>{` thumbnail image. 1:1 aspect ratio is best for thumbnails, to prevent image stretching.`}</li>
                    <li><b>tags:</b>{` keywords for searching and filtering.`}</li>
                </ul>
                <div>
                    {`That's about it for creating posts! Because each post is JSX component, they can be freely styled and 
                    share other components.`}
                </div>
            </div>
        </Layout>
    )
}
