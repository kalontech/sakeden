/* eslint-disable @typescript-eslint/camelcase */

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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
  ],
  siteMetadata: {
    author: "@gatsbyjs",
    description:
      "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
    title: "Gatsby Default Starter",
  },
}
