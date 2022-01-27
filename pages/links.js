import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'

const templateCode = 'https://github.com/anders-swanson/next-js-blog-template'

export default function Post() {
    return (
        <Layout>                
            <div className={utilStyles.flexGapContainer}>
                <div className={utilStyles.textBlock}>
                    {`Here you'll find any relevant links for the site, such as referral or informational links.`}
                    <br/><br/>
                    - <Link href={templateCode}>Template Site Code</Link>
                    <br/>
                    - <Link href='https://nextjs.org/'>Next-JS Framework</Link>
                </div> 
            </div>   
            <hr/> 
        </Layout>
    )
}