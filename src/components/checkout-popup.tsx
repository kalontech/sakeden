import moment from "moment"
import React, { useContext, useState } from "react"
// @ts-ignore
import DayPicker from "react-day-picker"
import { IoMdClose } from "react-icons/io"
import { Box, Button, Flex, Heading, Textarea } from "theme-ui"

import AppContext from "../app-context"

const getDeliveryTime = (): Date => {
  const deliveryTime = new Date()
  deliveryTime.setDate(deliveryTime.getDate() + 1)
  if (deliveryTime.getHours() >= 18) {
    deliveryTime.setDate(deliveryTime.getDate() + 1)
  }
  return deliveryTime
}

const CheckoutPopup: React.FC = () => {
  const { checkout, client, setIsCheckoutVisible } = useContext(AppContext)
  const [deliveryDate, setDeliveryDate] = useState<Date | undefined>(undefined)
  const [additionalNotes, setAdditionalNotes] = useState("")
  const [giftCardNote, setGiftCardNote] = useState("")

  const handleCheckout = async (): Promise<void> => {
    client.checkout.updateAttributes(checkout.id, {
      customAttributes: [
        {
          key: "Gift card note",
          value: giftCardNote,
        },
        {
          key: "Shipping date",
          value: moment(deliveryDate).format("YYYY-MM-DD"),
        },
      ],
      note: additionalNotes,
    })
    window.location = checkout.webUrl.replace(
      process.env.CONTEXT === "branch-deploy"
        ? process.env.SHOPIFY_PREVIEW_SHOP_NAME
        : process.env.SHOPIFY_SHOP_NAME,
      process.env.EXTERNAL_DOMAIN,
    )
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
            Additional notes
          </Heading>
          <Textarea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => {
              setAdditionalNotes(e.target.value)
            }}
            rows={3}
            value={additionalNotes}
          ></Textarea>
          <Heading as="h5" mb={2} mt={3} variant="h5">
            Include gift card
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
          Checkout
        </Button>
      </Flex>
    </Box>
  )
}

export default CheckoutPopup
