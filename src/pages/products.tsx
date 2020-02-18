import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Grid, Heading } from "theme-ui"

import { ProductsPageQuery, ShopifyProduct } from "../../graphql-types"
import Layout from "../components/layout"
import ProductCard from "../components/product-card"
import SEO from "../components/seo"

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
      <SEO title="Products" />
      <Layout>
        <Heading
          as="h2"
          mb={3}
          sx={{ textTransform: "uppercase" }}
          variant="h2"
        >
          Collection
        </Heading>
        <Grid columns={[1, 1, 2, 2]} gap="20px">
          {allShopifyProduct.edges.map(edge => {
            return <ProductCard node={edge.node as ShopifyProduct} />
          })}
        </Grid>
      </Layout>
    </>
  )
}

export default ProductsPage
