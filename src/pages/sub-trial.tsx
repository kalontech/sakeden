import { graphql, ReplaceComponentRendererArgs } from "gatsby"
import GatsbyImage, { FluidObject } from "gatsby-image"
// @ts-ignore
import addToMailchimp from "gatsby-plugin-mailchimp"
import QRCode from "qrcode.react"
import React, { useContext, useEffect, useState } from "react"
import { MdDone, MdShoppingCart } from "react-icons/md"
import { useScrollYPosition } from "react-use-scroll-position"
import { Box, Button, Flex, Heading, Input, Text } from "theme-ui"

import {
  ProductQuery,
  ShopifyProduct,
  ShopifyProductVariant,
} from "../../graphql-types"
import AppContext from "../app-context"
import Layout from "../components/layout"
import { InternalLink } from "../components/link"
import ProductTitle from "../components/product-title"
import SEO from "../components/seo"
import SocialBar from "../components/social-bar"
import ZoomingImage from "../components/zooming-image"
import { getPriceFromVariants, wait } from "../utils/helpers"

const SubTrialPage: React.FC<ReplaceComponentRendererArgs["props"]> = props => {
  const data = props.data as ProductQuery
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const shopifyProduct = data.shopifyProduct as ShopifyProduct

  const { setIsSubscribeVisible, setSubscriptionProduct } = useContext(
    AppContext,
  )

  useEffect(() => {
    setSubscriptionProduct("sakeden-sub-club-monthly-premium-trial-1")
  }, [setSubscriptionProduct])

  const handleSubscribe = (): void => {
    setIsSubscribeVisible(true)
  }

  const renderNoPrintLayout = () => (
    <Layout
      pt={[0, 0, 4, 4]}
      sx={{
        backgroundColor: "#414141",
        overflow: "hidden",
      }}
      noBanner={true}
    >
      <Flex
        sx={{
          flexDirection: "column",
          height: [
            "100%",
            "100%",
            "calc(100vh - 160px)",
            "calc(100vh - 160px)",
          ],
        }}
      >
        <Flex
          sx={{
            flex: 1,
            flexDirection: ["column", "column", "row", "row"],
            height: "100%",
          }}
        >
          <Flex
            sx={{
              flex: ["unset", "unset", 0.4, 0.4],
              flexDirection: "column",
              justifyContent: ["flex-start", "flex-start", "center", "center"],
              alignItems: ["center"],
            }}
          >
            <Box
              sx={{
                display: ["block", "block", "none", "none"],
                mb: [3, 3, 0, 0],
              }}
            >
              <img
                src="https://i.ibb.co/vmPKYhR/sub-trial-image.jpg"
                height="100%"
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>
            <Heading as="h2" variant="h3" color="white">
              Special offer
            </Heading>
            <Heading as="h1" variant="h2" color="white">
              3 month
            </Heading>
            <Heading as="h2" variant="h3" color="white">
              PREMIUM SAKE TRIAL
            </Heading>
            <Heading
              as="h4"
              variant="h4"
              color="white"
              style={{ textAlign: "center" }}
            >
              SUBSCRIPTION FOR A LIMITED TIME
            </Heading>

            <Text
              mt={4}
              color="white"
              style={{
                textAlign: "center",
              }}
            >
              Receive a set of small-batch, hand crafted sake from us every
              month for the next 3 months*, curated and hand-picked by out
              team's expert somelier delivered straight to your doorstep.
              <br />
              <br />
              No fuss, no indecisiveness, 3 new amazing bottles every month for
              $1,400 per month.
            </Text>
            {shopifyProduct.images && shopifyProduct.images[1] && (
              <Box my={4}>
                <GatsbyImage
                  fluid={
                    shopifyProduct.images[1].localFile!.childImageSharp!
                      .fluid as FluidObject
                  }
                  imgStyle={{
                    objectFit: "contain",
                    objectPosition: "0px 0px",
                  }}
                  style={{ height: "200px" }}
                />
              </Box>
            )}

            <Box m={4}>
              <Flex
                sx={{
                  flexDirection: ["column", "column", "row", "row"],
                  my: 2,
                  justifyContent: [
                    "flex-start",
                    "flex-start",
                    "center",
                    "center",
                  ],
                }}
              >
                <Button
                  onClick={handleSubscribe}
                  sx={{
                    flex: "none",
                    borderRadius: 15,
                  }}
                >
                  <Text>Sign up</Text>
                </Button>
              </Flex>
            </Box>

            <Heading as="h4" variant="h4" color="white">
              USE CODE: BTR159 for 15% OFF
            </Heading>
            <Text
              mt={5}
              color="white"
              opacity="0.5"
              style={{
                textAlign: "center",
              }}
            >
              *Your subscription will automatically end after 3 months.
            </Text>
          </Flex>

          <Box
            pl={5}
            sx={{
              display: ["none", "none", "block", "block"],
              flex: ["unset", "unset", 0.6, 0.6],
              position: "relative",
            }}
          >
            <Box
              sx={{
                bottom: "0px",
                left: "45%",
                height: "calc(100vh - 70px)",
                position: "fixed",
                right: ["0px", "0px", "0px", "0px"],
                transition: "top 100ms ease-in-out",
              }}
            >
              <img
                src="https://i.ibb.co/vmPKYhR/sub-trial-image.jpg"
                height="100%"
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Layout>
  )
  return (
    <>
      <SEO
        canonicalUrl={`https://sakeden.com/sub-trial`}
        description={shopifyProduct.description!}
        image={shopifyProduct.images![0]!.originalSrc!}
        product={shopifyProduct}
        title={shopifyProduct.title!}
      />
      <div className="Product__NoPrint">{renderNoPrintLayout()}</div>
    </>
  )
}

export const query = graphql`
  query SubClubTrial {
    allShopifyProduct(filter: { title: { regex: "/Auto renew/" } }) {
      edges {
        node {
          handle
          title
          variants {
            priceV2 {
              amount
              currencyCode
            }
          }
        }
      }
    }
    shopifyProduct(handle: { eq: "sakeden-sub-club-monthly-premium-trial" }) {
      availableForSale
      description
      descriptionHtml
      handle
      images {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
            resize(height: 1000) {
              src
            }
            sizes {
              presentationWidth
              presentationHeight
            }
          }
        }
        originalSrc
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
`

export default SubTrialPage
