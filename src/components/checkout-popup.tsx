import moment from "moment"
import React, { useContext, useState } from "react"
// @ts-ignore
import DayPicker from "react-day-picker"
import { IoMdClose } from "react-icons/io"
import { Box, Button, Flex, Heading, Textarea } from "theme-ui"

import AppContext from "../app-context"

const getDeliveryTime = (): Date => {
  const deliveryTime = new Date()

  if (deliveryTime.getHours() >= 13) {
    deliveryTime.setDate(deliveryTime.getDate() + 1)
  }

  return deliveryTime
}

const CheckoutPopup: React.FC = () => {
  const { checkout, client, setIsCheckoutVisible } = useContext(AppContext)
  const [deliveryDate, setDeliveryDate] = useState<Date | undefined>(undefined)
  const [additionalNotes, setAdditionalNotes] = useState("")

  const handleCheckout = async (): Promise<void> => {
    await client.checkout.updateAttributes(checkout.id, {
      customAttributes: [
        {
          key: "Shipping date",
          value: moment(deliveryDate).format("yyyy-MM-dd"),
        },
      ],
      note: additionalNotes,
    })
    window.location.replace(
      checkout.webUrl,
      // TODO: Fix and uncomment.
      // .replace(
      //   process.env.SHOPIFY_SHOP_NAME,
      //   process.env.SHOPIFY_EXTERNAL_DOMAIN,
      // ),
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
      <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
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
      <Flex mb={3} mt={2}>
        <Box>
          <Heading as="h5" mb={2} variant="h5">
            Delivery date
          </Heading>
          <DayPicker
            disabledDays={{
              before: getDeliveryTime(),
            }}
            firstDayOfWeek={1}
            onDayClick={(date: Date): void => {
              setDeliveryDate(date)
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
            rows={8}
            value={additionalNotes}
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
          variant="primary"
          sx={{ flex: 1 }}
        >
          Checkout
        </Button>
      </Flex>
    </Box>
  )
}

export default CheckoutPopup
