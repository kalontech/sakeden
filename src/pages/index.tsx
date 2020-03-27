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
import ProductCard from "../components/product-card"
import ProductFilters from "../components/product-filters"
import ProductTitle from "../components/product-title"
import SEO from "../components/seo"

const ProductsPage: React.FC = () => {
  const { allShopifyProduct, shopifyCollection } = useStaticQuery<
    ProductsPageQuery
  >(
    graphql`
      query ProductsPage {
        shopifyCollection(title: { eq: "Bottles" }) {
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
              vendor
            }
          }
        }
      }
    `,
  )
  const [breweriesFilterValue, setBreweriesFilterValue] = useState("*")
  const [priceFilterValue, setPriceFilterValue] = useState("asc")

  // 1. Price 0 -> 9.
  // 2. Available for sale -> Not available for sale.

  // Convert price amounts to numbers.
  shopifyCollection!.products!.map((shopifyProduct: any) => {
    try {
      // @ts-ignore
      shopifyProduct.variants[0].priceV2.amount = parseFloat(
        shopifyProduct.variants[0].priceV2.amount,
      )
    } catch (err) {
      console.error(err)
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      return shopifyProduct
    }
  })

  // Order by price.
  let allShopifyProductSorted = _.orderBy(
    shopifyCollection!.products,
    "variants[0].priceV2.amount",
    priceFilterValue as "asc" | "desc",
  )

  // Apply breweries filter.
  if (breweriesFilterValue !== "*") {
    allShopifyProductSorted = allShopifyProductSorted.filter(
      node => node && node.vendor === breweriesFilterValue,
    )
  }

  return (
    <>
      <SEO title="Sakeden Collection" />
      <Layout>
        <ProductTitle
          items={[
            { active: true, title: "Bottles", url: "/" },
            { active: false, title: "Sets", url: "/sets" },
            {
              active: false,
              title: "Subscription",
              url: "/products/sakeden-sub-club",
            },
          ]}
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
          />
        </Box>
        <Grid columns={[1, 1, 3, 3]} gap="30px">
          {allShopifyProductSorted.map(node => {
            return <ProductCard node={node as ShopifyProduct} />
          })}
        </Grid>
      </Layout>
    </>
  )
}

export default ProductsPage
