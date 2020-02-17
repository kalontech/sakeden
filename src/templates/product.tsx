import { graphql, ReplaceComponentRendererArgs } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import React, { SyntheticEvent, useContext, useState } from "react"
import { MdDone, MdShoppingCart } from "react-icons/md"
import { Box, Button, Flex, Heading, Text } from "theme-ui"

import { ShopifyProduct, ShopifyProductVariant } from "../../graphql-types"
import AppContext from "../app-context"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { getPriceFromVariants } from "../utils/price"

const ProductPage: React.FC<ReplaceComponentRendererArgs["props"]> = props => {
  const shopifyProduct = (props.pageResources as any).json.data
    .shopifyProduct as ShopifyProduct

  const { addLineItems } = useContext(AppContext)
  const [justAddedToCart, setJustAddedToCart] = useState(false)

  const handleAddToCart = (e: SyntheticEvent): void => {
    if (
      shopifyProduct.variants &&
      shopifyProduct.variants[0] &&
      shopifyProduct.variants[0].shopifyId
    ) {
      e.preventDefault()

      addLineItems([
        {
          quantity: 1,
          variantId: shopifyProduct.variants[0].shopifyId,
        },
      ])

      setJustAddedToCart(true)

      setTimeout(() => {
        setJustAddedToCart(false)
      }, 3000)
    }
  }

  return (
    <>
      <SEO title="Products" />
      <Layout>
        <Flex
          sx={{
            flexDirection: ["column", "column", "row", "row"],
            height: "100%",
          }}
        >
          <Flex
            sx={{
              flex: ["unset", "unset", 0.4, 0.4],
              flexDirection: "column",
              justifyContent: ["flex-start", "flex-start", "center", "center"],
            }}
          >
            <Heading as="h2" variant="h2">
              {shopifyProduct.title}
            </Heading>
            <Box mt={2} sx={{ display: ["block", "block", "none", "none"] }}>
              {shopifyProduct.images && shopifyProduct.images[0] && (
                <Image
                  fluid={
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    shopifyProduct.images[0].localFile!.childImageSharp!
                      .fluid as FluidObject
                  }
                  imgStyle={{ objectFit: "contain" }}
                />
              )}
            </Box>
            <Text mt={2}>{shopifyProduct.description}</Text>
            <Box mt={4}>
              {shopifyProduct.images && shopifyProduct.images[1] && (
                <Image
                  fluid={
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    shopifyProduct.images[1].localFile!.childImageSharp!
                      .fluid as FluidObject
                  }
                  imgStyle={{ objectFit: "contain" }}
                  style={{ height: "200px" }}
                />
              )}
            </Box>
            <Flex mt={4}>
              <Button sx={{ flex: 1 }} variant="secondary">
                {getPriceFromVariants(
                  shopifyProduct.variants as ShopifyProductVariant[],
                  0,
                )}
              </Button>
              <Box p={2} />
              <Button
                disabled={!shopifyProduct.availableForSale}
                onClick={handleAddToCart}
                sx={{ flex: 1 }}
              >
                {shopifyProduct.availableForSale ? (
                  <>
                    <Box mr={1}>
                      {justAddedToCart ? (
                        <MdDone fontSize="28px" />
                      ) : (
                        <MdShoppingCart fontSize="28px" />
                      )}
                    </Box>
                    <Text>Add to Cart</Text>
                  </>
                ) : (
                  <Text>Sold out</Text>
                )}
              </Button>
            </Flex>
          </Flex>
          <Box
            pl={5}
            sx={{
              display: ["none", "none", "block", "block"],
              flex: ["unset", "unset", 0.6, 0.6],
            }}
          >
            {shopifyProduct.images && shopifyProduct.images[0] && (
              <Image
                fluid={
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  shopifyProduct.images[0].localFile!.childImageSharp!
                    .fluid as FluidObject
                }
                imgStyle={{ objectFit: "contain" }}
                style={{
                  bottom: "0px",
                  height: "calc(100% - 100px)",
                  left: "40%",
                  position: "fixed",
                  right: "0px",
                  top: "100px",
                }}
              />
            )}
          </Box>
        </Flex>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
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
`

export default ProductPage
