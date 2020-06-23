/* eslint-disable react-hooks/exhaustive-deps */

import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
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
  const [featuredProducts, setFeaturedProducts] = useState<ShopifyProduct[]>([])

  // This picks only featured products and sorts it according to the Contenful order.
  useEffect(() => {
    const selectedProducts: ShopifyProduct[] = []

    for (const product of products || []) {
      const foundProduct = allShopifyProduct.edges.find(({ node }) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return node.handle! === product
      })
      if (foundProduct) {
        selectedProducts.push(foundProduct.node as ShopifyProduct)
      }
    }

    setFeaturedProducts(selectedProducts)
  }, [allShopifyProduct])

  return (
    <Box my={5}>
      <Heading as="h2" sx={{ mb: 3, textAlign: "center" }} variant="h2">
        {title}
      </Heading>
      <Grid columns={[1, 1, 3, 3]} gap="30px">
        {featuredProducts.map(node => {
          return <ProductCard node={node} />
        })}
      </Grid>
      <Box p={1} />
      <InternalLink href="/bottles">
        <Button aria-label="View collection" sx={{ mt: 4, mx: "auto" }}>
          View collection
        </Button>
      </InternalLink>
    </Box>
  )
}

export default ContentfulBlockFeaturedProducts
