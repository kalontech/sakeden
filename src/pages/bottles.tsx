import { graphql, useStaticQuery } from "gatsby"
import _ from "lodash"
import QRCode from "qrcode.react"
import React, { useEffect, useState } from "react"
import { Box, Flex, Grid, Heading, Select } from "theme-ui"
import {
  NumberParam,
  StringParam,
  useQueryParam,
  useQueryParams,
} from "use-query-params"

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
            tags
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
              tags
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
  const [query, setQuery] = useQueryParams({
    breweries: StringParam,
    price: StringParam,
    subset: StringParam,
  })
  const {
    breweries: breweriesFilterValue = "ALL",
    price: priceFilterValue = "ALL",
    subset: subsetFilterValue = "ALL",
  } = query

  useEffect(() => {
    if (!breweriesFilterValue || !priceFilterValue || !subsetFilterValue) {
      setQuery({
        breweries: "ALL",
        price: "ALL",
        subset: "ALL",
      })
    }
  }, [breweriesFilterValue, priceFilterValue, setQuery, subsetFilterValue])

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

  let allShopifyProductSorted = shopifyCollection!.products!

  // Order by price.
  if (priceFilterValue !== "ALL") {
    allShopifyProductSorted = _.orderBy(
      shopifyCollection!.products,
      "variants[0].priceV2.amount",
      priceFilterValue as "asc" | "desc",
    )
  }

  // Apply breweries filter.
  if (breweriesFilterValue !== "ALL") {
    allShopifyProductSorted = allShopifyProductSorted.filter(
      node => node && node.vendor === breweriesFilterValue,
    )
  }

  // Apply subset filter.
  if (subsetFilterValue !== "ALL") {
    allShopifyProductSorted = allShopifyProductSorted.filter(
      // @ts-ignore
      node => node && node.tags.includes(subsetFilterValue),
    )
  }

  return (
    <Box>
      {allShopifyProductSorted.map(node => {
        return (
          <Flex
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              mb: 4,
              mt: 2,
            }}
          >
            <Heading as="h4" sx={{ pr: 4 }} variant="h4">
              {node!.title!}
            </Heading>
            <QRCode
              height={80}
              width={80}
              size={80}
              style={{
                height: "80px",
                objectFit: "contain",
                width: "80px",
              }}
              value={`https://sakeden.com/products/${node!.handle!}`}
            />
          </Flex>
        )
      })}
    </Box>
  )
}

export default ProductsPage
