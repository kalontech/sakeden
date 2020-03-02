import { graphql, useStaticQuery } from "gatsby"
import _ from "lodash"
import React from "react"
import { Grid, Heading } from "theme-ui"

import { ProductsPageQuery, ShopifyProduct } from "../../graphql-types"
import Layout from "../components/layout"
import ProductCard from "../components/product-card"
import SEO from "../components/seo"

const availabilitySorter = (previousEdge: any, nextEdge: any) => {
  // eslint-disable-next-line prettier/prettier
  const previousAvailability = _.get(previousEdge, "node.availableForSale", false)
  const nextAvailability = _.get(nextEdge, "node.availableForSale", false)
  return previousAvailability === nextAvailability ? 1 : -1
}

const priceSorter = (previousEdge: any, nextEdge: any) => {
  if (!_.get(previousEdge, "node.availableForSale", false)) {
    return 0
  }
  // eslint-disable-next-line prettier/prettier
  const previousPriceAmount = parseFloat(_.get(previousEdge, "node.variants[0].priceV2.amount", 0))
  // eslint-disable-next-line prettier/prettier
  const nextPriceAmount = parseFloat( _.get(nextEdge, "node.variants[0].priceV2.amount", 0))
  return previousPriceAmount > nextPriceAmount ? 1 : -1
}

const ProductsPage: React.FC = () => {
  const { allShopifyProduct } = useStaticQuery<ProductsPageQuery>(
    graphql`
      query ProductsPage {
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

  return (
    <>
      <SEO title="Collection" />
      <Layout>
        <Heading
          as="h2"
          mb={3}
          sx={{ textTransform: "uppercase" }}
          variant="h2"
        >
          Collection
        </Heading>
        <Grid columns={[1, 1, 2, 2]} gap="30px">
          {allShopifyProduct.edges
            .sort(availabilitySorter)
            .sort(priceSorter)
            .map(edge => {
              return <ProductCard node={edge.node as ShopifyProduct} />
            })}
        </Grid>
      </Layout>
    </>
  )
}

export default ProductsPage
