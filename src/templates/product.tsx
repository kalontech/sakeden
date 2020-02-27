import { graphql, ReplaceComponentRendererArgs } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import React, { useContext, useState } from "react"
import { MdDone, MdShoppingCart } from "react-icons/md"
import { Box, Button, Flex, Heading, Text } from "theme-ui"

import { ShopifyProduct, ShopifyProductVariant } from "../../graphql-types"
import AppContext from "../app-context"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { getPriceFromVariants, wait } from "../utils/helpers"

const ProductPage: React.FC<ReplaceComponentRendererArgs["props"]> = props => {
  const shopifyProduct = (props.pageResources as any).json.data
    .shopifyProduct as ShopifyProduct

  const { addLineItems, setIsSubscribeVisible } = useContext(AppContext)
  const [justAddedToCart, setJustAddedToCart] = useState(false)

  // Determine whether this product is subscription.
  const isSubscription = shopifyProduct.title!.includes("Sub")

  const handleAddToCart = async (): Promise<void> => {
    if (
      shopifyProduct.variants &&
      shopifyProduct.variants[0] &&
      shopifyProduct.variants[0].shopifyId
    ) {
      addLineItems([
        {
          quantity: 1,
          variantId: shopifyProduct.variants[0].shopifyId,
        },
      ])

      // Display success mark in the button.
      setJustAddedToCart(true)
      await wait(3000)
      setJustAddedToCart(false)
    }
  }

  const handleSubscribe = (): void => {
    setIsSubscribeVisible(true)
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
                    shopifyProduct.images[1].localFile!.childImageSharp!
                      .fluid as FluidObject
                  }
                  imgStyle={{ objectFit: "contain" }}
                  style={{ height: "200px" }}
                />
              )}
            </Box>
            {isSubscription ? (
              <Box mt={2}>
                <Text sx={{ fontStyle: "italic" }}>
                  Automatically renews every 3 month
                </Text>
                <Flex mt={2}>
                  <Button
                    sx={{ flex: 1, fontSize: "28px" }}
                    variant="secondary"
                  >
                    {getPriceFromVariants(
                      shopifyProduct.variants as ShopifyProductVariant[],
                      0,
                      3,
                    )}
                  </Button>
                  <Box p={2} />
                  <Button onClick={handleSubscribe} sx={{ flex: 1 }}>
                    <Text>Subscribe</Text>
                  </Button>
                </Flex>
              </Box>
            ) : (
              <Flex mt={4}>
                <Button sx={{ flex: 1, fontSize: "30px" }} variant="secondary">
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
            )}
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
