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
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          windows: true,
          yandex: true,
        },
        logo: "./src/images/favicon.png",
      },
      resolve: "gatsby-plugin-favicon",
    },
    {
      options: {
        trackingId: "UA-155073210-1",
      },
      resolve: "gatsby-plugin-google-analytics",
    },
    {
      options: {
        id: "1743525",
        sv: "6",
      },
      resolve: "gatsby-plugin-hotjar",
    },
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
        name: "Sakeden",
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
        accessToken:
          process.env.CONTEXT === "branch-deploy"
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
        host:
          process.env.CONTEXT === "branch-deploy"
            ? "preview.contentful.com"
            : "cdn.contentful.com",
        spaceId:
          process.env.CONTEXT === "branch-deploy"
            ? process.env.CONTENTFUL_PREVIEW_SPACE_ID
            : process.env.CONTENTFUL_SPACE_ID,
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
        accessToken:
          process.env.CONTEXT === "branch-deploy"
            ? process.env.SHOPIFY_PREVIEW_ACCESS_TOKEN
            : process.env.SHOPIFY_ACCESS_TOKEN,
        apiVersion: "2020-01",
        shopName:
          process.env.CONTEXT === "branch-deploy"
            ? process.env.SHOPIFY_PREVIEW_SHOP_NAME
            : process.env.SHOPIFY_SHOP_NAME,
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
