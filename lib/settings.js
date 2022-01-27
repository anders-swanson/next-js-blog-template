export function SiteSettings() {
   return (
        {
            // Acts the title in head elements, and as the default title text for Layout components
            title: "Next-JS Blog Template",

            // Author of the website. This will show in copyright notices
            author: "Anders Swanson",

            // The icon image shown in the browser's tab
            icon: "logo.jpg",

            // The default header image on Layout components
            // This can be overriden using the 'headerImage' property on individual Layout components
            headerImage: "/images/header.jpg",

            // Default color for text overlayed on the Layout header
            // This can be override using the 'headerColor' property on individual Layout components
            headerColor: "white",

            // How many pages will show per page
            postsPerPage: 8
        }
   )
}
