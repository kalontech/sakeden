import Image, { FluidObject } from "gatsby-image"
import React, { useContext, useState } from "react"
import { MdDone, MdShoppingCart } from "react-icons/md"
import { Box, Button, Flex, Heading, Text } from "theme-ui"

import { ShopifyProduct, ShopifyProductVariant } from "../../graphql-types"
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

  const descriptionMetafield =
    node.metafields &&
    node.metafields.find(
      metafield => metafield && metafield.key === "One-Line-Description",
    )
  const description =
    (descriptionMetafield && descriptionMetafield.value) || node.description

  const handleAddToCart = async (): Promise<void> => {
    if (node.variants && node.variants[0] && node.variants[0].shopifyId) {
      addLineItems([
        {
          quantity: 1,
          variantId: node.variants[0].shopifyId,
        },
      ])

      // Display success mark in the button.
      setJustAddedToCart(true)
      await wait(3000)
      setJustAddedToCart(false)
    }
  }

  return (
    <InternalLink href={`/products/${node.handle}`}>
      <Card>
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
      </Card>
    </InternalLink>
  )
}

export default ProductCard
