import { graphql, navigate, useStaticQuery } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import React, { SyntheticEvent, useContext, useState } from "react"
import { MdDone, MdShoppingCart } from "react-icons/md"
import { Box, Button, Flex, Heading, Text } from "theme-ui"

import { ShopifyProduct } from "../../graphql-types"
import AppContext from "../app-context"
import { getPriceFromVariants, wait } from "../utils/helpers"
import Card from "./card"
import { InternalLink } from "./link"

interface ProductCardProps {
  node: ShopifyProduct
}

const ProductCard: React.FC<ProductCardProps> = ({ node }) => {
  const { addLineItems } = useContext(AppContext)
  const [justAddedToCart, setJustAddedToCart] = useState(false)
  const { file: newTagImage } = useStaticQuery<any>(graphql`
    query NewTagImageQuery {
      file(relativePath: { eq: "new-tag.png" }) {
        childImageSharp {
          fluid(maxWidth: 25) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const descriptionMetafield =
    node.metafields &&
    node.metafields.find(
      metafield => metafield && metafield.key === "One-Line-Description",
    )
  const description =
    (descriptionMetafield && descriptionMetafield.value) || node.description

  const handleAddToCart = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault()

    if (node.variants && node.variants[0] && node.variants[0].shopifyId) {
      addLineItems([
        {
          quantity: 1,
          variantId: node.variants[0].shopifyId,
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
  }
  // This is a hack for special discounts
  const discountPrice = 0
  // if (node.handle === "meguro-gorosuke") {
  //   discountPrice = Number.parseFloat(node.variants![0]!.priceV2!.amount || "0")
  //   discountPrice /= 2
  //   discountPrice = Math.floor(discountPrice)
  // }

  return (
    <InternalLink href={`/products/${node.handle}`}>
      <Card>
        <Flex sx={{ flexDirection: "row", justifyContent: "space-between" }}>
          {node.title && (
            <Heading
              as="h4"
              mt={2}
              mb={1}
              style={{
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 1,
                display: "-webkit-box",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              variant="h4"
            >
              {node.title.length > 30
                ? node.title.substring(0, 30) + "..."
                : node.title}
            </Heading>
          )}

          {node.tags && node.tags.includes("New") && (
            <Image
              fluid={newTagImage.childImageSharp!.fluid! as FluidObject}
              imgStyle={{ objectFit: "contain" }}
              style={{ height: "100px", width: "30px", marginTop: -40 }}
            />
          )}
        </Flex>
        {description && (
          <Text
            style={{
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
              display: "-webkit-box",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Text>
        )}
        {node.images && node.images[0] && (
          <Box mt={2}>
            <Image
              fluid={
                node.images[0].localFile!.childImageSharp!.fluid as FluidObject
              }
              style={{ height: "411px" }}
              imgStyle={{ objectFit: "contain" }}
            />
          </Box>
        )}
        <Flex
          mt={2}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          {node.availableForSale ? (
            <Flex
              sx={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                color={discountPrice !== 0 ? "danger" : "black"}
                variant="price"
                style={{
                  textDecoration: discountPrice !== 0 ? "line-through" : 0,
                }}
              >
                {getPriceFromVariants([node.variants![0]!], 0)}
              </Text>
              {discountPrice !== 0 && (
                <Text
                  style={{ marginLeft: 25 }}
                  variant="price"
                >{`HK$${discountPrice}`}</Text>
              )}
            </Flex>
          ) : (
            <Text color="danger" variant="price">
              SOLD OUT
            </Text>
          )}
          <Button
            onClick={handleAddToCart}
            variant={node.availableForSale ? "icon" : "iconDisabled"}
          >
            {justAddedToCart ? <MdDone /> : <MdShoppingCart />}
          </Button>
        </Flex>
      </Card>
    </InternalLink>
  )
}

export default ProductCard
