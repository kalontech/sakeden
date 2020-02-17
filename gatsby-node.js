const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  return graphql(`
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
}
