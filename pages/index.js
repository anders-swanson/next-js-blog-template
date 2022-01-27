import Layout from '../components/layout'
import { Posts } from '../lib/metadata'

export default function Home({ allPostsData }) {
  return (
    <Layout
      home
      allPostsData={allPostsData}
      postsHeading="Posts"
    />
  )
}

export async function getStaticProps() {
  const allPostsData = Posts()
  return {
    props: {
      allPostsData
    }
  }
}
