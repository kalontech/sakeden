import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Box, Button, Grid, Heading } from "theme-ui"

import {
  ContentfulBlockFeaturedProducts as ContentfulBlockFeaturedProductsProps,
  ProductsPageQuery,
  ShopifyProduct,
} from "../../graphql-types"
import { InternalLink } from "./link"
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
    <Box my={5}>
      <Heading as="h2" sx={{ mb: 3, textAlign: "center" }} variant="h2">
        {title}
      </Heading>
      <Grid columns={[1, 1, 3, 3]} gap="30px">
        {featuredProducts.map(edge => {
          return <ProductCard node={edge.node as ShopifyProduct} />
        })}
      </Grid>
      <Box p={1} />
      <InternalLink href="/products">
        <Button sx={{ mt: 4, mx: "auto" }}>View all collection</Button>
      </InternalLink>
    </Box>
  )
}

export default ContentfulBlockFeaturedProducts
