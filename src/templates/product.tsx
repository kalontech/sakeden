import "./product.css"

import { graphql, ReplaceComponentRendererArgs } from "gatsby"
import GatsbyImage, { FluidObject } from "gatsby-image"
// @ts-ignore
import addToMailchimp from "gatsby-plugin-mailchimp"
import QRCode from "qrcode.react"
import React, { useContext, useEffect, useState } from "react"
import { MdDone, MdShoppingCart } from "react-icons/md"
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
import { getPriceFromVariants, wait } from "../utils/helpers"

const ProductPage: React.FC<ReplaceComponentRendererArgs["props"]> = props => {
  const data = props.data as ProductQuery
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const shopifyProduct = data.shopifyProduct as ShopifyProduct

  const { addLineItems, setIsSubscribeVisible } = useContext(AppContext)
  const [justAddedToCart, setJustAddedToCart] = useState(false)
  const [isSubscribed, setIsSubcribed] = useState(false)
  const [isSubscribing, setIsSubcribing] = useState(false)
  const [email, setEmail] = useState("")
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%")
  const [backgroundSize, setBackgroundSize] = useState("100% 100%")
  const [isZoomedIn, setIsZoomedIn] = useState(false)

  // Determine whether this product is subscription.
  const isSubscription = shopifyProduct.title!.includes("Sub")

  // Build URL that will be shared in social networks.
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  // Determine backrgound size in order to get correct zoom level on hover.
  useEffect(() => {
    const image = new Image()
    image.addEventListener("load", function(this: any) {
      setBackgroundSize(
        `${this.naturalWidth / 2}px ${this.naturalHeight / 2}px`,
      )
    })
    image.src = shopifyProduct.images![0]!.originalSrc!
  }, [shopifyProduct])

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

  const handleNotifyRestocked = async (): Promise<void> => {
    try {
      setIsSubcribing(true)
      await addToMailchimp(email)
      await fetch(
        `https://sakeden-v2.netlify.app/.netlify/functions/tag-mailchimp-user?email=${email}&tag=restocking-${shopifyProduct.handle}`,
      )
      setIsSubcribed(true)
    } catch (err) {
      console.error(err)
    } finally {
      setIsSubcribing(false)
    }
  }

  const handleSubscribe = (): void => {
    setIsSubscribeVisible(true)
  }

  const renderNoPrintLayout = () => (
    <Layout>
      <Flex sx={{ flexDirection: "column", height: "100%" }}>
        {isSubscription && (
          <ProductTitle
            items={[
              { active: false, title: "Bottles", url: "/bottles" },
              { active: false, title: "Sets", url: "/sets" },
              {
                active: true,
                title: "Subscription",
                url: "/products/sakeden-sub-club",
              },
            ]}
          />
        )}
        <Flex
          sx={{
            flex: 1,
            flexDirection: ["column", "column", "row", "row"],
            height: "100%",
          }}
        >
          <Flex
            sx={{
              flex: ["unset", "unset", 0.5, 0.5],
              flexDirection: "column",
              justifyContent: ["flex-start", "flex-start", "center", "center"],
            }}
          >
            {!isSubscription && (
              <Box sx={{ mb: 4 }}>
                <Flex>
                  <InternalLink href="/">
                    <Text sx={{ color: "gray" }}>Collections</Text>
                  </InternalLink>
                  <Text sx={{ color: "gray", px: 3 }}>/</Text>
                  {shopifyProduct.tags!.includes("Bottles") && (
                    <InternalLink href="/">
                      <Text sx={{ color: "gray" }}>Bottles</Text>
                    </InternalLink>
                  )}
                  {shopifyProduct.tags!.includes("Bydeau") &&
                    shopifyProduct.tags!.length === 1 && (
                      <InternalLink href="/bydeau">
                        <Text sx={{ color: "gray" }}>Bydeau</Text>
                      </InternalLink>
                    )}
                  {shopifyProduct.tags!.includes("Sets") && (
                    <InternalLink href="/sets">
                      <Text sx={{ color: "gray" }}>Sets</Text>
                    </InternalLink>
                  )}
                  <Text sx={{ color: "gray", px: 3 }}>/</Text>
                  <InternalLink href={`/products/${shopifyProduct.handle!}`}>
                    <Text>{shopifyProduct.title!}</Text>
                  </InternalLink>
                </Flex>
              </Box>
            )}
            {shopifyProduct.vendor && shopifyProduct.vendor !== "Sakeden" && (
              <Flex sx={{ alignItems: "center", mb: 2, pb: 1 }}>
                <Box
                  sx={{
                    bg: "gray",
                    height: "3px",
                    mr: 2,
                    width: "30px",
                  }}
                />
                <Heading as="h4" color="gray" variant="h4">
                  {shopifyProduct.vendor}
                </Heading>
              </Flex>
            )}
            <Heading as="h2" variant="h2">
              {shopifyProduct.title}
            </Heading>
            <Box mt={2} sx={{ display: ["block", "block", "none", "none"] }}>
              {shopifyProduct.images && shopifyProduct.images[0] && (
                <GatsbyImage
                  fluid={
                    shopifyProduct.images[0].localFile!.childImageSharp!
                      .fluid as FluidObject
                  }
                  imgStyle={{ objectFit: "contain" }}
                />
              )}
            </Box>
            <Text mt={2}>
              <div
                className="dangerouslySetInnerHTML__description"
                dangerouslySetInnerHTML={{
                  __html: shopifyProduct.descriptionHtml!,
                }}
              ></div>
            </Text>
            <Box mt={4}>
              {shopifyProduct.images && shopifyProduct.images[1] && (
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
              )}
            </Box>
            <Box mt={3}>
              <SocialBar shareUrl={shareUrl} title={shopifyProduct.title!} />
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
              <Box mt={4}>
                {!shopifyProduct.availableForSale && (
                  <Box>
                    <Heading as="h5" variant="h5" sx={{ mb: -1 }}>
                      Notify when restocked
                    </Heading>
                    <Flex sx={{ alignItems: "center" }}>
                      <Input
                        disabled={isSubscribed || isSubscribing}
                        my={3}
                        name="Email"
                        onChange={(
                          e: React.ChangeEvent<HTMLInputElement>,
                        ): void => {
                          setEmail(e.target.value)
                        }}
                        placeholder="Email"
                        value={email}
                        variant="solid"
                      />
                      <Button
                        onClick={handleNotifyRestocked}
                        variant={
                          isSubscribed || isSubscribing
                            ? "primaryDisabled"
                            : "primary"
                        }
                      >
                        {isSubscribed
                          ? "Subscribed"
                          : isSubscribing
                          ? "Wait..."
                          : "Subscribe"}
                      </Button>
                    </Flex>
                  </Box>
                )}
                <Flex>
                  <Button
                    sx={{ flex: 1, fontSize: "30px" }}
                    variant="secondary"
                  >
                    {shopifyProduct.availableForSale ? (
                      <Text>
                        {getPriceFromVariants(
                          shopifyProduct.variants as ShopifyProductVariant[],
                          0,
                        )}
                      </Text>
                    ) : (
                      <Text color="danger">Sold out</Text>
                    )}
                  </Button>
                  <Box p={2} />
                  <Button
                    onClick={handleAddToCart}
                    variant={
                      shopifyProduct.availableForSale
                        ? "primary"
                        : "primaryDisabled"
                    }
                    sx={{ flex: 1 }}
                  >
                    {justAddedToCart ? (
                      <Box mr={1}>
                        <MdDone fontSize="28px" />
                      </Box>
                    ) : (
                      <>
                        <Box mr={1}>
                          <MdShoppingCart fontSize="28px" />
                        </Box>
                        <Text>Add to cart</Text>
                      </>
                    )}
                  </Button>
                </Flex>
              </Box>
            )}
          </Flex>
          <Box
            pl={5}
            sx={{
              display: ["none", "none", "block", "block"],
              flex: ["unset", "unset", 0.5, 0.5],
              position: "relative",
            }}
          >
            {shopifyProduct.images && shopifyProduct.images[0] && (
              <Box
                sx={{
                  bottom: "0px",
                  left: "0px",
                  position: "absolute",
                  right: ["0px", "0px", "0px", "calc((100vw - 1280px) / -2)"],
                  top: "0px",
                }}
              >
                <figure
                  onMouseMove={(e: any): void => {
                    const {
                      left,
                      top,
                      width,
                      height,
                    } = e.target.getBoundingClientRect()
                    const x = ((e.pageX - left) / width) * 100
                    const y = ((e.pageY - top) / height) * 100
                    setBackgroundPosition(`${x}% ${y}%`)
                  }}
                  onMouseEnter={(): void => {
                    setIsZoomedIn(true)
                  }}
                  onMouseLeave={(): void => {
                    setIsZoomedIn(false)
                  }}
                  style={{
                    backgroundImage: `url(${shopifyProduct.images[0].originalSrc})`,
                    backgroundPosition,
                    backgroundRepeat: "no-repeat",
                    backgroundSize,
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <GatsbyImage
                    fluid={
                      shopifyProduct.images[0].localFile!.childImageSharp!
                        .fluid as FluidObject
                    }
                    imgStyle={{
                      backgroundColor: "white",
                      objectFit: "contain",
                    }}
                    style={{
                      height: "100%",
                      visibility: isZoomedIn ? "hidden" : "visible",
                      width: "100%",
                    }}
                  />
                </figure>
              </Box>
            )}
          </Box>
        </Flex>
      </Flex>
    </Layout>
  )

  const renderPrintLayout = () => (
    <Flex sx={{ flexDirection: "column", height: "740px" }}>
      <Flex sx={{ flexDirection: "column" }}>
        <Heading as="h4" sx={{ fontWeight: "normal", mb: 3 }} variant="h4">
          {shopifyProduct.title!}
        </Heading>
        <div
          className="dangerouslySetInnerHTML__description"
          dangerouslySetInnerHTML={{
            __html: shopifyProduct.descriptionHtml!.replace("<p><br></p>", ""),
          }}
          style={{ fontSize: "12px" }}
        ></div>
      </Flex>
      <Flex sx={{ flex: 1 }}>
        <Flex sx={{ flex: 0.6, position: "relative" }}>
          {shopifyProduct.images && shopifyProduct.images[0] && (
            <img
              src={
                shopifyProduct.images[0].localFile!.childImageSharp!.resize!
                  .src!
              }
              style={{
                height: "100%",
                objectFit: "contain",
                position: "absolute",
                width: "100%",
              }}
            />
          )}
        </Flex>
        <Flex sx={{ flex: 0.4, flexDirection: "column" }}>
          {shopifyProduct.images && shopifyProduct.images[1] && (
            <Flex
              sx={{
                alignItems: "flex-end",
                flex: 1,
                justifyContent: "center",
                p: 1,
              }}
            >
              <img
                src={shopifyProduct.images[1].originalSrc!}
                style={{
                  height: "100%",
                  maxHeight: "200px",
                  maxWidth: "200px",
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            </Flex>
          )}
          <Flex
            sx={{
              alignItems: "center",
              flex: 1,
              flexDirection: "column",
              justifyContent: shopifyProduct.images![1]!
                ? "flex-start"
                : "center",
              p: 1,
            }}
          >
            <Heading
              as="h4"
              sx={{ fontWeight: "normal", mb: "5px", textAlign: "center" }}
              variant="h4"
            >
              To reorder
            </Heading>
            <QRCode
              style={{ height: "110px", objectFit: "contain", width: "110px" }}
              value={`https://sakeden.com/products/${shopifyProduct.handle!}`}
            />
            <Heading
              as="h4"
              sx={{
                fontWeight: "normal",
                letterSpacing: "6.5px",
                ml: "6.5px",
                mt: 2,
                textAlign: "center",
              }}
              variant="h4"
            >
              {getPriceFromVariants(
                shopifyProduct.variants as ShopifyProductVariant[],
                0,
              )}
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )

  return (
    <>
      <SEO
        description={shopifyProduct.description!}
        image={shopifyProduct.images![0]!.originalSrc!}
        product={shopifyProduct}
        title={shopifyProduct.title!}
      />
      <div className="Product__Print">{renderPrintLayout()}</div>
      <div className="Product__NoPrint">{renderNoPrintLayout()}</div>
    </>
  )
}

export const query = graphql`
  query Product($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
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

export default ProductPage
