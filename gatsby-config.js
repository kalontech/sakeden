require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    "gatsby-plugin-graphql-codegen",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-react-svg",
    {
      options: {
        policy: [
          {
            allow: "/",
            crawlDelay: 10,
            disallow: "/generators",
            userAgent: "*",
          },
          {
            allow: "/",
            crawlDelay: 10,
            disallow: "/private",
            userAgent: "*",
          },
          {
            allow: "/",
            crawlDelay: 10,
            disallow: "/subs",
            userAgent: "*",
          },
          {
            allow: "/",
            crawlDelay: 10,
            disallow: "/products/test-product",
            userAgent: "*",
          },
          {
            allow: "/",
            crawlDelay: 10,
            disallow: "/products/sakeden-sub-club-regular-bi-weekly-1",
            userAgent: "*",
          },
          {
            allow: "/",
            crawlDelay: 10,
            disallow: "/products/sakeden-sub-club-regular-bi-weekly",
            userAgent: "*",
          },
          {
            allow: "/",
            crawlDelay: 10,
            disallow: "/products/sakeden-sub-club-monthly-regular-1",
            userAgent: "*",
          },
          {
            allow: "/",
            crawlDelay: 10,
            disallow: "/products/sakeden-sub-club-monthly-regular",
            userAgent: "*",
          },
          {
            allow: "/",
            crawlDelay: 10,
            disallow: "/products/sakeden-sub-club-monthly-premium-1",
            userAgent: "*",
          },
          {
            allow: "/",
            crawlDelay: 10,
            disallow: "/products/sakeden-sub-club-monthly-premium",
            userAgent: "*",
          },
          {
            allow: "/",
            crawlDelay: 10,
            disallow: "/products/sakeden-sub-club-bi-weekly-premium-1",
            userAgent: "*",
          },
          {
            allow: "/",
            crawlDelay: 10,
            disallow: "/products/sakeden-sub-club-bi-weekly-premium",
            userAgent: "*",
          },
          {
            allow: "/",
            crawlDelay: 10,
            disallow: "/bydeau",
            userAgent: "*",
          },
          {
            allow: "/",
            crawlDelay: 10,
            disallow: "/addresses",
            userAgent: "*",
          },
          {
            allow: "/",
            crawlDelay: 10,
            disallow: "/address-editor",
            userAgent: "*",
          },
          {
            allow: "/",
            crawlDelay: 10,
            disallow: "/orders",
            userAgent: "*",
          },
        ],
      },
      resolve: "gatsby-plugin-robots-txt",
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-remove-trailing-slashes",
    {
      options: {},
      resolve: "gatsby-plugin-sitemap",
    },
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-typescript",
    "gatsby-plugin-typescript-checker",
    "gatsby-plugin-use-query-params",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      options: {
        pixelId: "2553094571475972",
      },
      resolve: "gatsby-plugin-facebook-pixel",
    },
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
        name: "SAKEDEN",
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
        dsn:
          "https://d113865b5e104680a8095b280c8e2413@o138408.ingest.sentry.io/5196139",
        enabled: (() => ["production"].includes(process.env.NODE_ENV))(),
        environment: process.env.NODE_ENV,
      },
      resolve: "gatsby-plugin-sentry",
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
        host: "cdn.contentful.com",
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
    author: "",
    description: "",
    siteUrl: "https://sakeden.com",
    title: "SAKEDEN",
  },
}
