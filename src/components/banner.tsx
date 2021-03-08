import moment from "moment"
import React, { useEffect, useState } from "react"
import Countdown from "react-countdown"
import { Box, Container, Flex, Text } from "theme-ui"
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  const renderer = ({ days, hours, minutes, seconds }: any): any => {
    return (
      <Box>
        <Text sx={{ color: "white", textAlign: "center" }}>
          END OF SEASON is HERE! Use code KAMPAINOW to receive 30% off your
          whole order!
        </Text>
        <Flex
          sx={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Box sx={{ mx: 2 }}>
            <Text
              sx={{ color: "white", textAlign: "center" }}
              style={{ fontSize: 24 }}
            >
              {days}
            </Text>
            <Text sx={{ color: "white", textAlign: "center" }}>days</Text>
          </Box>
          <Box sx={{ mx: 2 }}>
            <Text
              sx={{ color: "white", textAlign: "center" }}
              style={{ fontSize: 24 }}
            >
              {hours}
            </Text>
            <Text sx={{ color: "white", textAlign: "center" }}>hours</Text>
          </Box>
          <Box sx={{ mx: 2 }}>
            <Text
              sx={{ color: "white", textAlign: "center" }}
              style={{ fontSize: 24 }}
            >
              {minutes}
            </Text>
            <Text sx={{ color: "white", textAlign: "center" }}>minutes</Text>
          </Box>
          <Box sx={{ mx: 2 }}>
            <Text
              sx={{ color: "white", textAlign: "center" }}
              style={{ fontSize: 24 }}
            >
              {seconds}
            </Text>
            <Text sx={{ color: "white", textAlign: "center" }}>seconds</Text>
          </Box>
        </Flex>
      </Box>
    )
  }
  return (
    <Box sx={{ bg: "black" }}>
      <Container>
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "center",
            py: 2,
          }}
        >
          {/* <Countdown date={new Date("2020-09-18")} renderer={renderer} /> */}
          <Text sx={{ color: "white", textAlign: "center" }}>
            Order HK$600 by 2pm for FREE SAME DAY DELIVERY!
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}

export default Banner
