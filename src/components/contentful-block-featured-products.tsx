import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Grid, Heading } from "theme-ui"

import {
  ContentfulBlockFeaturedProducts as ContentfulBlockFeaturedProductsProps,
  ProductsPageQuery,
  ShopifyProduct,
} from "../../graphql-types"
import ProductCard from "./product-card"

const ContentfulBlockFeaturedProducts: React.FC<ContentfulBlockFeaturedProductsProps> = ({
  products,
  title,
}) => {
  const { allShopifyProduct } = useStaticQuery<ProductsPageQuery>(
    graphql`
      query {
        allShopifyProduct(filter: { title: { regex: "/^((?!Sub).)*$/" } }) {
          edges {
            node {
              availableForSale
              description
              handle
              images {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
                originalSrc
              }
              metafields {
                key
                value
              }
              shopifyId
              title
              variants {
                shopifyId
                title
                priceV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    `,
  )

  const featuredProducts = allShopifyProduct.edges.filter(({ node }) => {
    return products!.includes(node.handle!)
  })

  return (
    <div>
      <Heading as="h2" sx={{ textAlign: "center" }} variant="h2">
        {title}
      </Heading>
      <Grid columns={[1, 1, 3, 3]} gap="20px">
        {featuredProducts.map(edge => {
          return <ProductCard node={edge.node as ShopifyProduct} />
        })}
      </Grid>
    </div>
  )
}

export default ContentfulBlockFeaturedProducts
