import utilStyles from '../styles/utils.module.css'
import Layout from "../components/layout"

export default function Post() {
    return (
        <Layout>                
            <div className={utilStyles.flexGapContainer}>
                <div className={utilStyles.textBlock}>
                    {`Sample about page for the template blog. This space can be used to describe your
                    site, yourself, or really anything else.`}
                </div> 
            </div>   
            <hr/>        
        </Layout>
    )
}