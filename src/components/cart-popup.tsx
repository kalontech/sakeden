import React, { useContext } from "react"
import { IoMdAdd, IoMdClose, IoMdRemove, IoMdTrash } from "react-icons/io"
import { Box, Button, Flex, Heading, Image, Text } from "theme-ui"

import { ShopifyProductVariant } from "../../graphql-types"
import AppContext from "../app-context"
import { getPriceFromVariants } from "../utils/helpers"

const CartPopup: React.FC = () => {
  const {
    checkout,
    setIsCheckoutVisible,
    setIsCartVisible,
    updateLineItems,
  } = useContext(AppContext)

  const setQuantity = (lineItemId: string, quantity: number): void => {
    updateLineItems([
      {
        id: lineItemId,
        quantity,
      },
    ])
  }

  if (!checkout) {
    return null
  }

  return (
    <Box
      bg="secondary"
      p={4}
      sx={{
        height: ["100vh", "100vh", "auto", "auto"],
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "scroll",
        width: ["100vw", "100vw", "700px", "700px"],
      }}
    >
      <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Heading
          as="h4"
          color="gray"
          sx={{ textTransform: "uppercase" }}
          variant="h4"
        >
          {checkout.lineItems.length > 0
            ? `Shopping cart (${checkout.lineItems.length} ${
                checkout.lineItems.length === 1 ? "item" : "items"
              })`
            : "Shopping cart is empty"}
        </Heading>
        <Button
          onClick={(): void => {
            setIsCartVisible(false)
          }}
          variant="iconInverted"
        >
          <IoMdClose />
        </Button>
      </Flex>
      <Box mt={2}>
        {checkout.lineItems &&
          checkout.lineItems.map((lineItem: any) => {
            const renderQuantityEditor = (): React.ReactNode => {
              return (
                <Flex sx={{ alignItems: "center" }}>
                  <Button
                    onClick={(): void => {
                      setQuantity(lineItem.id, lineItem.quantity - 1)
                    }}
                    variant="icon"
                  >
                    <IoMdRemove />
                  </Button>
                  <Button
                    sx={{ height: "40px", width: "40px" }}
                    variant="secondary"
                  >
                    {lineItem.quantity}
                  </Button>
                  <Button
                    onClick={(): void => {
                      setQuantity(lineItem.id, lineItem.quantity + 1)
                    }}
                    variant="icon"
                  >
                    <IoMdAdd />
                  </Button>
                </Flex>
              )
            }

            let discountPrice = 0
            console.log(lineItem)
            if (lineItem.variant.sku === "SK024B") {
              discountPrice = Number.parseFloat(
                lineItem.variant.priceV2!.amount || "0",
              )
              discountPrice /= 2
            }
            return (
              <Flex
                sx={{ alignItems: "center", justifyContent: "space-between" }}
              >
                <Flex sx={{ alignItems: "center" }}>
                  <Box sx={{ display: ["none", "none", "block", "block"] }}>
                    <Button
                      onClick={(): void => {
                        setQuantity(lineItem.id, 0)
                      }}
                      variant="iconInverted"
                    >
                      <IoMdTrash />
                    </Button>
                  </Box>
                  <Image
                    src={lineItem.variant.image.src}
                    sx={{ height: "80px", objectFit: "contain", width: "80px" }}
                  />
                  <Flex sx={{ flexDirection: "column" }}>
                    <Heading as="h5" variant="h5">
                      {lineItem.title}{" "}
                      {lineItem.variant.title !== "Default Title" &&
                        lineItem.variant.title}
                    </Heading>
                    <Box sx={{ display: ["block", "block", "none", "none"] }}>
                      {renderQuantityEditor()}
                    </Box>
                  </Flex>
                </Flex>
                <Flex sx={{ alignItems: "center" }}>
                  <Box sx={{ display: ["none", "none", "block", "block"] }}>
                    {renderQuantityEditor()}
                  </Box>
                  <Heading
                    as="h4"
                    sx={{ textAlign: "right", width: "150px" }}
                    variant="h4"
                  >
                    {discountPrice !== 0
                      ? `HK$${Math.floor(discountPrice)}`
                      : getPriceFromVariants([lineItem.variant], 0)}
                  </Heading>
                </Flex>
              </Flex>
            )
          })}
      </Box>
      <Flex
        mb={3}
        mt={4}
        sx={{
          alignItems: ["flex-end", "flex-end", "center", "center"],
          flexDirection: ["column", "column", "row", "row"],
          justifyContent: "space-between",
        }}
      >
        <Text>Shipping & taxes calculated at checkout</Text>
        <Heading as="h4" variant="h4">
          <Text color="gray" sx={{ display: "inline" }}>
            Subtotal:{" "}
          </Text>
          <Text sx={{ display: "inline" }}>
            {getPriceFromVariants(
              [{ priceV2: checkout.subtotalPriceV2 } as ShopifyProductVariant],
              0,
            )}
          </Text>
        </Heading>
      </Flex>
      <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Button
          onClick={(): void => {
            setIsCartVisible(false)
          }}
          variant="secondary"
          sx={{ flex: 1 }}
        >
          Continue shopping
        </Button>
        <Box p={2} />
        <Button
          onClick={(): void => {
            setIsCartVisible(false)

            setTimeout(() => {
              setIsCheckoutVisible(true)
            }, 100)
          }}
          variant={
            checkout.lineItems.length > 0 ? "primary" : "primaryDisabled"
          }
          sx={{ flex: 1 }}
        >
          Checkout
        </Button>
      </Flex>
    </Box>
  )
}

export default CartPopup
