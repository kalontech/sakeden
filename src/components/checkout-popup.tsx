import { navigate } from "gatsby"
import moment from "moment"
import queryString from "query-string"
import React, { useContext, useEffect, useState } from "react"
// @ts-ignore
import DayPicker from "react-day-picker"
import { IoMdClose } from "react-icons/io"
import { Box, Button, Flex, Heading, Text, Textarea } from "theme-ui"

import AppContext from "../app-context"

export const getDeliveryTime = (
  checkout = { subtotalPriceV2: { amount: 0 } },
): Date => {
  const deliveryTime = new Date()
  // deliveryTime.setDate(deliveryTime.getDate() + 1)
  let sameDayDelivery = false
  if (Number(checkout["subtotalPriceV2"]["amount"]) >= 600) {
    sameDayDelivery = true
  }
  if (deliveryTime.getHours() >= 16 || !sameDayDelivery) {
    deliveryTime.setDate(deliveryTime.getDate() + 1)
  }
  if (deliveryTime.getDay() === 0) {
    deliveryTime.setDate(deliveryTime.getDate() + 1)
  }
  return deliveryTime
}

enum PACKAGING_TYPES {
  STANDARD = "STANDARD",
  SUSTAINABLE = "SUSTAINABLE",
}

const CheckoutPopup: React.FC = () => {
  const { checkout, client, setIsCheckoutVisible } = useContext(AppContext)
  const [deliveryDate, setDeliveryDate] = useState<Date>(
    getDeliveryTime(checkout),
  )
  const [additionalNotes, setAdditionalNotes] = useState("")
  const [discountCode, setDiscountCode] = useState("")
  const [giftCardNote, setGiftCardNote] = useState("")
  const [packaging, setPackaging] = useState(PACKAGING_TYPES.STANDARD)
  const [isUpdatingAttributes, setIsUpdatingAttributes] = useState(false)
  const [isValidDiscountCode, setIsValidDiscountCode] = useState(false)

  // useEffect(() => {
  //   // @ts-ignore
  //   if (hj) {
  //     // @ts-ignore
  //     hj("stateChange", window.location.href + "@hj-started-checkout")
  //   }
  // }, [])

  useEffect(() => {
    const autorun = async (): Promise<void> => {
      if (discountCode !== "") {
        const response = await fetch(
          `https://us-central1-sakeden.cloudfunctions.net/lookupDiscountCode?discountCode=${discountCode}`,
        )
        const body = await response.text()
        if (body === "0") {
          setIsValidDiscountCode(false)
        } else if (body === "1") {
          setIsValidDiscountCode(true)
        }
      } else {
        setIsValidDiscountCode(true)
      }
    }
    autorun()
  }, [discountCode])

  const handleCheckout = (): void => {
    // @ts-ignore
    if (hj) {
      // @ts-ignore
      hj("stateChange", window.location.href + "@hj-checkout-handed-to-shopify")
    }

    try {
      setIsUpdatingAttributes(true)

      const variantsMap = []

      for (const lineItem of checkout.lineItems) {
        const variantId = new Buffer(lineItem.variant.id, "base64")
          .toString("ascii")
          .split("?")[0]
          .split("/")[4]
        const quantity = lineItem.quantity
        variantsMap.push(`${variantId}:${quantity}`)
      }

      const qs = queryString.stringify({
        "attributes[Delivery items]": "",
        "attributes[Gift card note]": giftCardNote,
        "attributes[Packaging (STANDARD or SUSTAINABLE)]": packaging,
        "attributes[Shipping date]": moment(deliveryDate).format("YYYY-MM-DD"),
        discount: discountCode,
        note: additionalNotes,
      })

      // eslint-disable-next-line prettier/prettier
      const checkoutUrl = `https://sakaguranow.myshopify.com/cart/${variantsMap.join(",",)}?${qs}`

      // @ts-ignore
      window.location = checkoutUrl

      // Erase the cart.
      localStorage.removeItem("shopify_checkout_id")
    } catch (err) {
      // @ts-ignore
      Sentry.captureException(err)
    }
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
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Heading
          as="h4"
          color="gray"
          sx={{ textTransform: "uppercase" }}
          variant="h4"
        >
          Checkout
        </Heading>
        <Button
          onClick={(): void => {
            setIsCheckoutVisible(false)
          }}
          variant="iconInverted"
        >
          <IoMdClose />
        </Button>
      </Flex>
      <Flex
        mb={3}
        mt={2}
        sx={{
          flexDirection: ["column", "column", "row", "row"],
        }}
      >
        <Box>
          <Heading as="h5" mb={2} variant="h5">
            Delivery date
          </Heading>
          <DayPicker
            disabledDays={[
              {
                before: getDeliveryTime(checkout),
              },

              { daysOfWeek: [0] },
              // exclude Easter holiday
              new Date(2020, 3, 13),
              // exclude labor day holidays
              new Date(2020, 3, 30),
              new Date(2020, 4, 1),
            ]}
            firstDayOfWeek={1}
            onDayClick={(date: Date, data: Record<string, boolean>): void => {
              if (!data["disabled"]) {
                setDeliveryDate(date)
              }
            }}
            selectedDays={deliveryDate}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Heading as="h5" mb={2} variant="h5">
            Discount code
          </Heading>
          <Textarea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => {
              setDiscountCode(e.target.value)
            }}
            rows={1}
            sx={{ resize: "none" }}
            value={discountCode}
          ></Textarea>
          {discountCode.length > 0 && !isValidDiscountCode && (
            <Text sx={{ color: "danger" }}>Wrong discount code</Text>
          )}
          <Heading as="h5" my={2} variant="h5">
            Packaging
          </Heading>
          <Flex
            mt={2}
            sx={{
              flexDirection: ["row", "row", "row", "row"],
            }}
          >
            <Button
              onClick={() => setPackaging(PACKAGING_TYPES.STANDARD)}
              sx={{ mr: 2 }}
              variant={
                packaging === PACKAGING_TYPES.STANDARD
                  ? "variantSelected"
                  : "variantNotSelected"
              }
            >
              Standard
            </Button>
            <Button
              onClick={() => setPackaging(PACKAGING_TYPES.SUSTAINABLE)}
              sx={{ mr: 2 }}
              variant={
                packaging === PACKAGING_TYPES.SUSTAINABLE
                  ? "variantSelected"
                  : "variantNotSelected"
              }
            >
              Sustainable
            </Button>
          </Flex>
          <Heading as="h5" mb={2} mt={3} variant="h5">
            Notes for delivery
          </Heading>
          <Textarea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => {
              setAdditionalNotes(e.target.value)
            }}
            rows={3}
            value={additionalNotes}
          ></Textarea>
          <Heading as="h5" mb={2} mt={3} variant="h5">
            Include Gift Card Message
          </Heading>
          <Textarea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => {
              setGiftCardNote(e.target.value)
            }}
            rows={4}
            value={giftCardNote}
          ></Textarea>
        </Box>
      </Flex>
      <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Button
          onClick={(): void => {
            setIsCheckoutVisible(false)
          }}
          variant="secondary"
          sx={{ flex: 1 }}
        >
          Continue shopping
        </Button>
        <Box p={2} />
        <Button
          disabled={!deliveryDate}
          onClick={handleCheckout}
          variant={deliveryDate ? "primary" : "primaryDisabled"}
          sx={{ flex: 1 }}
        >
          {isUpdatingAttributes ? "Loading..." : "Checkout"}
        </Button>
      </Flex>
    </Box>
  )
}

export default CheckoutPopup
