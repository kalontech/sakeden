import { graphql, useStaticQuery } from "gatsby"
import _ from "lodash"
import React, { useState } from "react"
import { Box, Flex, Grid, Heading, Select } from "theme-ui"

import {
  ProductsPageQuery,
  ShopifyCollection,
  ShopifyProduct,
} from "../../graphql-types"
import Layout from "../components/layout"
import { InternalLink } from "../components/link"
import ProductCard from "../components/product-card"
import ProductFilters from "../components/product-filters"
import ProductTitle from "../components/product-title"
import SEO from "../components/seo"

const priceSorter = (previousEdge: any, nextEdge: any): number => {
  return (
    parseFloat(_.get(previousEdge, "node.variants[0].priceV2.amount", 0)) -
    parseFloat(_.get(nextEdge, "node.variants[0].priceV2.amount", 0))
  )
}

const SetsPage: React.FC = () => {
  const { shopifyCollection } = useStaticQuery<ProductsPageQuery>(
    graphql`
      query BydeauPage {
        shopifyCollection(title: { eq: "Bydeau" }) {
          products {
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
            vendor
          }
        }
      }
    `,
  )
  const [breweriesFilterValue, setBreweriesFilterValue] = useState("*")
  const [priceFilterValue, setPriceFilterValue] = useState("asc")

  // 1. Price 0 -> 9.
  // 2. Available for sale -> Not available for sale.
  let allShopifyProductSorted = shopifyCollection
    ? [
        ...shopifyCollection
          .products!.filter(node => node && node.availableForSale)
          .sort(priceSorter),
        ...shopifyCollection
          .products!.filter(node => node && !node.availableForSale)
          .sort(priceSorter),
      ]
    : []

  if (breweriesFilterValue !== "*") {
    allShopifyProductSorted = allShopifyProductSorted.filter(
      node => node && node.vendor === breweriesFilterValue,
    )
  }

  if (priceFilterValue === "desc") {
    allShopifyProductSorted = allShopifyProductSorted.reverse()
  }

  return (
    <>
      <SEO title="Bydeau" />
      <Layout>
        <ProductTitle
          items={[{ active: true, title: "Bydeau", url: "/bydeau" }]}
        />
        <Box my={3}>
          <ProductFilters
            onBreweriesFilterChange={(value): void => {
              setBreweriesFilterValue(value)
            }}
            onPriceFilterChange={(value): void => {
              setPriceFilterValue(value)
            }}
            shopifyCollection={shopifyCollection as ShopifyCollection}
            showBreweriesFilter={false}
          />
        </Box>
        <Grid columns={[1, 1, 2, 2]} gap="30px">
          {allShopifyProductSorted.map(node => {
            return <ProductCard node={node as ShopifyProduct} />
          })}
        </Grid>
      </Layout>
    </>
  )
}

export default SetsPage
