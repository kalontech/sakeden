import moment from "moment"
import React, { useContext, useEffect, useState } from "react"
// @ts-ignore
import DayPicker from "react-day-picker"
import { IoMdClose } from "react-icons/io"
import { Box, Button, Flex, Heading, Text, Textarea } from "theme-ui"

import AppContext from "../app-context"

export const getDeliveryTime = (): Date => {
  const deliveryTime = new Date()
  deliveryTime.setDate(deliveryTime.getDate() + 1)
  if (deliveryTime.getHours() >= 16) {
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
  const [deliveryDate, setDeliveryDate] = useState<Date>(getDeliveryTime())
  const [additionalNotes, setAdditionalNotes] = useState("")
  const [discountCode, setDiscountCode] = useState("")
  const [giftCardNote, setGiftCardNote] = useState("")
  const [packaging, setPackaging] = useState(PACKAGING_TYPES.STANDARD)
  const [isUpdatingAttributes, setIsUpdatingAttributes] = useState(false)
  const [isValidDiscountCode, setIsValidDiscountCode] = useState(false)

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

  const handleCheckout = async (): Promise<void> => {
    try {
      setIsUpdatingAttributes(true)
      await client.checkout.updateAttributes(checkout.id, {
        customAttributes: [
          {
            key: "Gift card note",
            value: giftCardNote,
          },
          {
            key: "Shipping date",
            value: moment(deliveryDate).format("YYYY-MM-DD"),
          },
          {
            key: "Packaging (STANDARD or SUSTAINABLE)",
            value: packaging,
          },
          {
            key: "Delivery items",
            value: "",
          },
        ],
        note: additionalNotes,
      })
      await client.checkout.addDiscount(checkout.id, discountCode)
      window.location = checkout.webUrl.replace(
        process.env.SHOPIFY_SHOP_NAME,
        process.env.EXTERNAL_DOMAIN,
      )
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
                before: getDeliveryTime(),
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
