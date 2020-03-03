const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  // Create Contenful blog posts.
  const contentfulBlogPosts = graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
      actions.createPage({
        component: path.resolve("./src/templates/blog-post.tsx"),
        context: {
          slug: node.slug,
        },
        path: `/blog-posts/${node.slug}`,
      })
    })
  })

  // Create Contenful pages.
  const contentfulPages = graphql(`
    {
      allContentfulPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allContentfulPage.edges.forEach(({ node }) => {
      actions.createPage({
        component: path.resolve("./src/templates/page.tsx"),
        context: {
          slug: node.slug,
        },
        path: node.slug === "home" ? "/" : `/${node.slug}`,
      })
    })
  })

  // Create Shopify products.
  const shopifyProducts = graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
    }
  `).then(result => {
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
      actions.createPage({
        component: path.resolve("./src/templates/product.tsx"),
        context: {
          handle: node.handle,
        },
        path: `/products/${node.handle}`,
      })
    })
  })

  return Promise.all([contentfulBlogPosts, contentfulPages, shopifyProducts])
}
