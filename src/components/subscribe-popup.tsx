import React, { useContext, useState } from "react"
import { IoMdClose } from "react-icons/io"
import Select, { OptionTypeBase, ValueType } from "react-select"
import { Box, Button, Flex, Heading, Textarea } from "theme-ui"

import AppContext from "../app-context"

const SubscribePopup: React.FC = () => {
  const { checkout, setIsSubscribeVisible } = useContext(AppContext)
  const [deliveryDay, setDeliveryDay] = useState<
    ValueType<OptionTypeBase> | undefined
  >(undefined)
  const [additionalNotes, setAdditionalNotes] = useState("")

  const handleCheckout = (): void => {
    if (deliveryDay) {
      // @ts-ignore
      const _deliveryDay = deliveryDay.value
      const _note = additionalNotes
      const _subscriptionId = 230548
      const _variantId = ""

      window.location.replace(
        `https://shop.sakeden.com/pages/recharge-checkout?delivery_day=${_deliveryDay}&note=${_note}&subscription_id=${_subscriptionId}&variant_id=${_variantId}`,
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
        <Box sx={{ flex: 0.4 }}>
          <Heading as="h5" mb={2} variant="h5">
            Delivery day
          </Heading>
          <Select
            onChange={(value): void => {
              setDeliveryDay(value)
            }}
            options={[
              { label: "1st", value: "1st" },
              { label: "2nd", value: "2nd" },
              { label: "3rd", value: "3rd" },
              { label: "4th", value: "4th" },
              { label: "5th", value: "5th" },
              { label: "6th", value: "6th" },
              { label: "7th", value: "7th" },
              { label: "8th", value: "8th" },
              { label: "9th", value: "9th" },
              { label: "10th", value: "10th" },
              { label: "11th", value: "11th" },
              { label: "12th", value: "12th" },
              { label: "13th", value: "13th" },
              { label: "14th", value: "14th" },
              { label: "15th", value: "15th" },
              { label: "16th", value: "16th" },
              { label: "17th", value: "17th" },
              { label: "18th", value: "18th" },
              { label: "19th", value: "19th" },
              { label: "20th", value: "20th" },
              { label: "21th", value: "21th" },
              { label: "22th", value: "22th" },
              { label: "23th", value: "23th" },
              { label: "24th", value: "24th" },
              { label: "25th", value: "25th" },
              { label: "26th", value: "26th" },
              { label: "27th", value: "27th" },
              { label: "28th", value: "28th" },
              {
                label: "29th or last day of the month",
                value: "29th or last day of the month",
              },
            ]}
            styles={{
              menuList: (provided, state) => ({
                ...provided,
                maxHeight: "200px",
              }),
            }}
            value={deliveryDay}
          />
        </Box>
        <Box p={2} />
        <Box sx={{ flex: 0.6 }}>
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
