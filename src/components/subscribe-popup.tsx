/* eslint-disable @typescript-eslint/camelcase */

import moment from "moment"
import qs from "query-string"
import React, { useContext, useState } from "react"
// @ts-ignore
import DayPicker from "react-day-picker"
import { IoMdClose } from "react-icons/io"
import { Box, Button, Flex, Heading, Textarea } from "theme-ui"

import AppContext from "../app-context"
import { getDeliveryTime } from "./checkout-popup"

const config = {
  "sakeden-sub-club-bi-weekly-premium-1": {
    chargeIntervalFrequency: "4",
    chargeIntervalUnitType: "Weeks",
    shippingIntervalFrequency: "2",
    shippingIntervalUnitType: "Weeks",
    subscriptionId: "249318",
    variantId: "32832307593304",
  },
  "sakeden-sub-club-monthly-premium-1": {
    chargeIntervalFrequency: "1",
    chargeIntervalUnitType: "Months",
    shippingIntervalFrequency: "1",
    shippingIntervalUnitType: "Months",
    subscriptionId: "249319",
    variantId: "32832312410200",
  },
  "sakeden-sub-club-monthly-premium-trial-1": {
    chargeIntervalFrequency: "1",
    chargeIntervalUnitType: "Months",
    shippingIntervalFrequency: "1",
    shippingIntervalUnitType: "Months",
    subscriptionId: "249319",
    variantId: "39648831471798",
  },
  "sakeden-sub-club-monthly-regular-1": {
    chargeIntervalFrequency: "1",
    chargeIntervalUnitType: "Months",
    shippingIntervalFrequency: "1",
    shippingIntervalUnitType: "Months",
    subscriptionId: "249319",
    variantId: "32832312377432",
  },
  "sakeden-sub-club-regular-bi-weekly-1": {
    chargeIntervalFrequency: "4",
    chargeIntervalUnitType: "Weeks",
    shippingIntervalFrequency: "2",
    shippingIntervalUnitType: "Weeks",
    subscriptionId: "249318",
    variantId: "32832307626072",
  },
}

const SubscribePopup: React.FC = () => {
  const { checkout, setIsSubscribeVisible, subscriptionProduct } = useContext(
    AppContext,
  )
  const [deliveryDay, setDeliveryDay] = useState()
  const [additionalNotes, setAdditionalNotes] = useState("")
  const [giftCardNote, setGiftCardNote] = useState("")

  const handleCheckout = (): void => {
    if (deliveryDay) {
      // @ts-ignore
      const cc = config[subscriptionProduct]
      const q = qs.stringify({
        charge_interval_frequency: cc.chargeIntervalFrequency,
        charge_interval_unit_type: cc.chargeIntervalUnitType,
        delivery_day: moment(deliveryDay).format("YYYY-MM-DD"),
        gift_card_note: giftCardNote,
        note: additionalNotes,
        quantity: 1,
        shipping_interval_frequency: cc.chargeIntervalFrequency,
        shipping_interval_unit_type: cc.shippingIntervalUnitType,
        subscription_id: cc.subscriptionId,
        variant_id: cc.variantId,
      })

      window.location.replace(
        `https://shop.sakeden.com/pages/recharge-checkout?${q}`,
      )
    }
  }

  if (!checkout) {
    return <></>
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
          Subscribe
        </Heading>
        <Button
          onClick={(): void => {
            setIsSubscribeVisible(false)
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
            First delivery date
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
                setDeliveryDay(date as any)
              }
            }}
            selectedDays={deliveryDay}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Heading as="h5" mb={2} variant="h5">
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
            setIsSubscribeVisible(false)
          }}
          variant="secondary"
          sx={{ flex: 1 }}
        >
          Continue shopping
        </Button>
        <Box p={2} />
        <Button
          disabled={!deliveryDay}
          onClick={handleCheckout}
          variant={deliveryDay ? "primary" : "primaryDisabled"}
          sx={{ flex: 1 }}
        >
          Checkout
        </Button>
      </Flex>
    </Box>
  )
}

export default SubscribePopup
