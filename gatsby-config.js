/* eslint-disable @typescript-eslint/camelcase */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      resolve: "gatsby-source-filesystem",
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      options: {
        background_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        theme_color: "#663399",
      },
      resolve: "gatsby-plugin-manifest",
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-typescript-checker",
    "gatsby-plugin-theme-ui",
    {
      options: {
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        apiVersion: "2020-01",
        shopName: process.env.SHOPIFY_SHOP_NAME,
      },
      resolve: "gatsby-source-shopify",
    },
    "gatsby-plugin-graphql-codegen",
    "gatsby-plugin-react-svg",
    {
      options: {
        fonts: {
          google: [
            {
              family: "Bebas Neue",
            },
            {
              family: "Barlow",
            },
          ],
        },
      },
      resolve: "gatsby-plugin-webfonts",
    },
    {
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
      resolve: "gatsby-plugin-mailchimp",
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
  ],
  siteMetadata: {
    author: "@andriytsaryov",
    description: "",
    title: "Sakeden",
  },
}
