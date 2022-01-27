import utilStyles from '../../styles/utils.module.css'
import Layout from "../../components/layout"
import Slider from "../../components/slider"
import Link from 'next/link'

//+metadata
let metadata = {
    "title": "Further Development",
    "desc": "",
    "date": "2022-01-23",
    "image": "/images/thumbnail2.JPG",
    "tags": ["guide", "customizing"]
}
const sliderCode = `
<Slider
    width={400}
    height={600}
    slides={[
        '/images/slides/s1.jpeg',
        '/images/slides/s2.jpg'
    ]}
/>
`

const layoutCode = `
<Layout 
    headerText='/images/my-custom.image.png'
    headerColor='black'
    subText='My Header Text'
> 
    <div>                
       This is some content inside the Layout!
    </div>
</Layout>
`

export default function Post() {
    return (        
        <Layout 
            headerText={metadata.title}
            subText='Customizing website content'
        >
            <div className={utilStyles.flexWrapContainer}>
                <div className={utilStyles.justifyCenter}>
                    {`The template is bundled with custom components to aid with development. Settings are exposed in the /lib/settings.js for 
                    additional configuration.`}
                </div>
                <h1>Settings</h1>
                <div className={utilStyles.justifyCenter}>
                    {`/lib/settings.js offers the following customization options for the template:`}
                </div>
                <ul>
                    <li><b>title:</b>{` Title text on the home page, and title bar. If a Layout component does not supply a title,
                    this value will be used instead.`}</li>
                    <li><b>author:</b>{` Appears in any copyright notices on the site.`}</li>
                    <li><b>headerImage:</b>{` Default header image on Layout components.`}</li>
                    <li><b>headerColor:</b>{` Default text color for header text.`}</li>
                    <li><b>postsPerPage:</b>{` How many posts to display per page. Default is 8.`}</li>
                </ul>
                <h1 className={utilStyles.justifyCenter}>Layout</h1>
                <div>
                    {`The Layout component provides common styling for posts on the blog. Most posts will
                    want to wrap their child component in a Layout component. All pages on the demo site are
                    an example of the Layout component being used.`}
                    <br/>
                    {`Below is a sample Layout usage. All child elements of the page should reside inside the 
                    Layout wrapper.`}
                </div>
                <pre>{layoutCode}</pre>
                <h1 className={utilStyles.justifyCenter}>Burger Menu</h1>
                <div>
                    {`You can customize what appears in the Burger Menu by editing /components/burger.js. 
                    By default, this menu has links to the Home, Links, and About pages. You can add or remove
                    links from the Burger Menu by editing this file.`}
                    <br/><br/>
                    {`Special thanks to the authors of the `}
                    <Link href='https://github.com/negomi/react-burger-menu'>
                        react-burger-menu package
                    </Link>
                    {` for developing the Burger Menu assets.`}
                </div>
                <h1>Slider</h1>
                <div>
                    {`The Slider component implements a basic slider for image and video. The slider supports
                    static or URL basic images, and static .mp4 or .mov videos.`}
                    <br/>
                    {`The following snippet creates the slider shown below`}
                </div>
                <pre className={utilStyles.justifyCenter}>{sliderCode}</pre>
                <Slider
                    width={400}
                    height={600}
                    slides={[
                        '/images/slides/s1.jpeg',
                        '/images/slides/s2.jpg'
                    ]}
                />
            </div>
        </Layout>
    )
}
