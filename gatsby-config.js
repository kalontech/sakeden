require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    "gatsby-plugin-graphql-codegen",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-react-svg",
    "gatsby-plugin-sharp",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-typescript",
    "gatsby-plugin-typescript-checker",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
      resolve: "gatsby-plugin-mailchimp",
    },
    {
      options: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        background_color: "#663399",
        display: "minimal-ui",
        // icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
        name: "gatsby-starter-default",
        // eslint-disable-next-line @typescript-eslint/camelcase
        short_name: "starter",
        // eslint-disable-next-line @typescript-eslint/camelcase
        start_url: "/",
        // eslint-disable-next-line @typescript-eslint/camelcase
        theme_color: "#663399",
      },
      resolve: "gatsby-plugin-manifest",
    },
    {
      options: {
        fonts: {
          google: [
            {
              family: "Barlow",
            },
            {
              family: "Bebas Neue",
            },
          ],
        },
      },
      resolve: "gatsby-plugin-webfonts",
    },
    {
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
      resolve: "gatsby-source-contentful",
    },
    {
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      resolve: "gatsby-source-filesystem",
    },
    {
      options: {
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        apiVersion: "2020-01",
        shopName: process.env.SHOPIFY_SHOP_NAME,
      },
      resolve: "gatsby-source-shopify",
    },
  ],
  siteMetadata: {
    author: "@andriytsaryov",
    description: "",
    title: "Sakeden",
  },
}
