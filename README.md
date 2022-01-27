# next-js-blog-template

A template built using [next-js](https://nextjs.org/docs/getting-started) for creating simple, JS based blogs.

### Features

- Paginated blog.
- posts are JSX-components (Not Markdown).
- Common Layout component for global styling.
- Basic searching and filtering.
- Bundled components for image slider, video, searching, layout, and menu.

### Examples

- [Demo Guide](https://next-js-blog-template-eta.vercel.app/)
- [Outdoor Blog](https://www.laurensbigadventure.com/)


### Developer Guide

Prerequisites:
- A recent version of Node (I use v16+)

1. Checkout the repository
2. run `npm install`
3. Start the webserver with `npm run dev`


## How to add a new page

#### 1.

Create a new JS file in the `pages/blog/` directory, such as `pages/blog/mypage.js`

#### 2.

Add metadata to your page, at the top of the file. the `//+metadata` comment is important for the site builder to add your page's
metadata to the metadata store during site compilation.
```
//+metadata
let metadata = {
    // Title which will appear in links and in HTML title
    "title": "my new page",
    // Page description
    "desc": "This is a description of my page!",
    // Page publish date, in 'YYYY-MM-DD' format
    "date": "2020-01-02",
    // Path to cover image
    "image": "/images/profile.jpg",
    // List of tags. Tags are used for sorting/filtering/searching.
    "tags": ["camping"]
}
```

#### 3.

Implement the React page contract in your page:
```
import Layout from "../../components/layout"

export default function Post() {
    return (
        // you may use any image or header text, not just the metadata values
        <Layout headerImage={metadata.image} headerText={metadata.title}>
            // page content is configurable               
            <h1>Hello World!</h1>
        </Layout>
    )
}
```

The `Layout` component contains a common container for the site. It is not required, but recommended for most pages.

Save your file and restart the dev webserver to reload the metadata store. Your page should be visible on the home page (:3000)
