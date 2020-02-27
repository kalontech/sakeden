const path = require("path")

exports.createPages = ({ graphql, actions }) => {
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
        path: `/pages/${node.slug}`,
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

  return Promise.all([contentfulPages, shopifyProducts])
}
