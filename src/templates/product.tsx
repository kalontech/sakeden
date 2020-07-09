import "./product.css"

import { DiscussionEmbed } from "disqus-react"
import { graphql, navigate, ReplaceComponentRendererArgs } from "gatsby"
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

const ProductPage: React.FC<ReplaceComponentRendererArgs["props"]> = props => {
  const data = props.data as ProductQuery
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const shopifyProduct = data.shopifyProduct as ShopifyProduct

  const {
    addLineItems,
    setIsSubscribeVisible,
    setSubscriptionProduct,
  } = useContext(AppContext)
  const [justAddedToCart, setJustAddedToCart] = useState(false)
  const [isSubscribed, setIsSubcribed] = useState(false)
  const [isSubscribing, setIsSubcribing] = useState(false)
  const [email, setEmail] = useState("")
  const [currentVariant, setCurrentVariant] = useState<ShopifyProductVariant>(
    shopifyProduct.variants![0]!,
  )
  const [subscriptionInterval, setSubscriptionInterval] = useState("bi-weekly")
  const [subscriptionType, setSubscriptionType] = useState("premium")

  // Determine whether this product is subscription.
  const isSubscription = shopifyProduct.title!.includes("Sub")

  // Build URL that will be shared in social networks.
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  const currentSubscriptionProduct = data.allShopifyProduct.edges.find(edge => {
    return (
      edge.node.handle?.includes(subscriptionInterval) &&
      edge.node.handle.includes(subscriptionType)
    )
  })

  useEffect(() => {
    const subcriptionProduct = data.allShopifyProduct.edges.find(edge => {
      return (
        edge.node.handle?.includes(subscriptionInterval) &&
        edge.node.handle.includes(subscriptionType)
      )
    })
    if (subcriptionProduct) {
      setSubscriptionProduct(subcriptionProduct.node.handle!)
    }
  }, [
    data.allShopifyProduct.edges,
    setSubscriptionProduct,
    subscriptionInterval,
    subscriptionType,
  ])

  const handleAddToCart = async (): Promise<void> => {
    addLineItems([
      {
        quantity: 1,
        variantId: currentVariant.shopifyId,
      },
    ])

    // @ts-ignore
    if (hj) {
      // @ts-ignore
      hj("stateChange", window.location.href + "@hj-added-to-cart")
    }

    // Display success mark in the button.
    setJustAddedToCart(true)
    await wait(3000)
    setJustAddedToCart(false)
  }

  const handleNotifyRestocked = async (): Promise<void> => {
    try {
      setIsSubcribing(true)
      await addToMailchimp(email)
      await fetch(
        `${process.env.FIREBASE_FUNCTIONS_PREFIX}/tagMailchimpUser?email=${email}&tag=restocking-${shopifyProduct.handle}`,
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
                    <InternalLink href="/bottles">
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
            <Heading as="h1" variant="h2">
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
            {shopifyProduct.variants!.length >= 2 && (
              <Flex mt={4}>
                {shopifyProduct.variants!.map(variant => {
                  return (
                    <Button
                      onClick={(): void => {
                        setCurrentVariant(variant!)
                      }}
                      sx={{ mr: 2 }}
                      variant={
                        currentVariant.shopifyId === variant!.shopifyId
                          ? "variantSelected"
                          : "variantNotSelected"
                      }
                    >
                      {variant!.title}
                    </Button>
                  )
                })}
              </Flex>
            )}
            {isSubscription && (
              <>
                <Flex mt={4}>
                  <Button
                    onClick={(): void => {
                      setSubscriptionType("regular")
                    }}
                    sx={{ mr: 2, width: ["100%", "100%", "200px", "200px"] }}
                    variant={
                      subscriptionType === "regular"
                        ? "variantSelected"
                        : "variantNotSelected"
                    }
                  >
                    Regular
                  </Button>
                  <Button
                    onClick={(): void => {
                      setSubscriptionType("premium")
                    }}
                    sx={{ mr: 2, width: ["100%", "100%", "200px", "200px"] }}
                    variant={
                      subscriptionType === "premium"
                        ? "variantSelected"
                        : "variantNotSelected"
                    }
                  >
                    Premium
                  </Button>
                </Flex>
                <Flex mt={2}>
                  <Button
                    onClick={(): void => {
                      setSubscriptionInterval("bi-weekly")
                    }}
                    sx={{ mr: 2, width: ["100%", "100%", "200px", "200px"] }}
                    variant={
                      subscriptionInterval === "bi-weekly"
                        ? "variantSelected"
                        : "variantNotSelected"
                    }
                  >
                    Bi-weekly
                  </Button>
                  <Button
                    onClick={(): void => {
                      setSubscriptionInterval("monthly")
                    }}
                    sx={{ mr: 2, width: ["100%", "100%", "200px", "200px"] }}
                    variant={
                      subscriptionInterval === "monthly"
                        ? "variantSelected"
                        : "variantNotSelected"
                    }
                  >
                    Monthly
                  </Button>
                </Flex>
              </>
            )}
            <Box mt={3}>
              <SocialBar shareUrl={shareUrl} title={shopifyProduct.title!} />
            </Box>
            {isSubscription && currentSubscriptionProduct ? (
              <Box mt={2}>
                <Flex
                  sx={{
                    flexDirection: ["column", "column", "row", "row"],
                    mt: 2,
                  }}
                >
                  <Button
                    sx={{ flex: ["none", "none", 1, 1], fontSize: "28px" }}
                    variant="secondary"
                  >
                    {getPriceFromVariants(
                      [currentSubscriptionProduct.node.variants![0]!] as any,
                      0,
                      1,
                    )}
                  </Button>
                  <Box p={2} />
                  <Button
                    onClick={handleSubscribe}
                    sx={{ flex: ["none", "none", 1, 1] }}
                  >
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
                <Flex
                  sx={{ flexDirection: ["column", "column", "row", "row"] }}
                >
                  <Button
                    sx={{ flex: ["none", "none", 1, 1], fontSize: "30px" }}
                    variant="secondary"
                  >
                    {shopifyProduct.availableForSale ? (
                      <Text>{getPriceFromVariants([currentVariant], 0)}</Text>
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
                    sx={{ flex: ["none", "none", 1, 1] }}
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
            <Box mt={4}>
              <DiscussionEmbed
                config={{
                  identifier: `products/${shopifyProduct.handle!}`,
                  title: shopifyProduct.title!,
                  url: `https://sakeden.com/products/${shopifyProduct.handle!}`,
                }}
                shortname={process.env.GATSBY_DISQUS_NAME!}
              />
            </Box>
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
                  left: "50%",
                  position: "fixed",
                  right: ["0px", "0px", "0px", "0px"],
                  // Increase height when the Black Banner is not at the screen.
                  top: "164px",
                  transition: "top 100ms ease-in-out",
                }}
              >
                <ZoomingImage image={shopifyProduct.images[0]} />
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
            {typeof window === "object" && window.location.search !== "?qr=0" && (
              <>
                <Heading
                  as="h4"
                  sx={{ fontWeight: "normal", mb: "5px", textAlign: "center" }}
                  variant="h4"
                >
                  To reorder
                </Heading>
                <QRCode
                  style={{
                    height: "110px",
                    objectFit: "contain",
                    width: "110px",
                  }}
                  value={`https://sakeden.com/products/${shopifyProduct.handle!}`}
                />
              </>
            )}
            {/* <Heading
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
              {getPriceFromVariants([currentVariant], 0)}
            </Heading> */}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )

  return (
    <>
      <SEO
        canonicalUrl={`https://sakeden.com/products/${shopifyProduct.handle}`}
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
