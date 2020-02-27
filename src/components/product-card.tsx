import Image, { FluidObject } from "gatsby-image"
import React, { SyntheticEvent, useContext, useState } from "react"
import { MdDone, MdShoppingCart } from "react-icons/md"
import { Box, Button, Flex, Heading, Text } from "theme-ui"

import { ShopifyProduct, ShopifyProductVariant } from "../../graphql-types"
import AppContext from "../app-context"
import { getPriceFromVariants } from "../utils/helpers"
import { InternalLink } from "./link"

interface ProductCardProps {
  node: ShopifyProduct
}

const ProductCard: React.FC<ProductCardProps> = ({ node }) => {
  const { addLineItems } = useContext(AppContext)
  const [justAddedToCart, setJustAddedToCart] = useState(false)

  const descriptionMetafield =
    node.metafields &&
    node.metafields.find(
      metafield => metafield && metafield.key === "One-Line-Description",
    )
  const description =
    (descriptionMetafield && descriptionMetafield.value) || node.description

  const handleAddToCart = (e: SyntheticEvent): void => {
    if (node.variants && node.variants[0] && node.variants[0].shopifyId) {
      e.preventDefault()

      addLineItems([
        {
          quantity: 1,
          variantId: node.variants[0].shopifyId,
        },
      ])

      setJustAddedToCart(true)

      setTimeout(() => {
        setJustAddedToCart(false)
      }, 3000)
    }
  }

  return (
    <InternalLink href={`/products/${node.handle}`}>
      <Flex
        bg="muted"
        p={3}
        sx={{
          ":hover": {
            boxShadow: "0px 3px 5px 3px rgba(0, 0, 0, 0.1)",
          },
          boxShadow: "0px 3px 5px 1px rgba(0, 0, 0, 0.05)",
          flexDirection: "column",
          height: "100%",
          transition: "200ms ease-in-out",
        }}
      >
        {node.title && (
          <Heading as="h4" variant="h4" mt={2}>
            {node.title}
          </Heading>
        )}
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
              imgStyle={{ objectFit: "contain" }}
              sx={{ height: "411px" }}
            />
          </Box>
        )}
        <Flex
          mt={2}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          {node.availableForSale ? (
            <Text variant="price">
              {getPriceFromVariants(
                node.variants as ShopifyProductVariant[],
                0,
              )}
            </Text>
          ) : (
            <Text color="danger" variant="price">
              SOLD OUT
            </Text>
          )}
          <Button onClick={handleAddToCart} variant="icon">
            {justAddedToCart ? <MdDone /> : <MdShoppingCart />}
          </Button>
        </Flex>
      </Flex>
    </InternalLink>
  )
}

export default ProductCard
