import moment from "moment"
import React, { useEffect, useState } from "react"
import { Box, Container, Flex, Text } from "theme-ui"
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BannerProps {}

const calculateTimeLeft = (now: moment.MomentInput) => {
  const END_OF_SALE = moment(new Date("2020-09-18"))
  const duration = moment.duration(END_OF_SALE.diff(now))
  const days = duration.asDays()
  duration.subtract(moment.duration(days, "days"))

  //Get hours and subtract from duration
  const hours = duration.hours()
  duration.subtract(moment.duration(hours, "hours"))

  //Get Minutes and subtract from duration
  const minutes = duration.minutes()
  duration.subtract(moment.duration(minutes, "minutes"))
  //Get seconds
  const seconds = duration.seconds()
  return {
    days: Math.floor(days),
    hours: 24 + hours,
    minutes: 60 + minutes,
    seconds: 60 + seconds,
  }
}

const Banner: React.FC<BannerProps> = () => {
  const [timeLeft, setTimeLeft] = useState<any>({})
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(new Date()))
    }, 1000)
    return () => clearTimeout(timer)
  })
  return (
    <Box sx={{ bg: "black" }}>
      <Container>
        <Flex
          sx={{
            alignItems: "center",
            height: "64px",
            justifyContent: "center",
          }}
        >
          <Text sx={{ color: "white", textAlign: "center" }}>
            END OF SEASON is HERE! Use code KAMPAINOW to receive 30% off your
            whole order! {timeLeft && Math.floor(timeLeft["days"])} days{" "}
            {timeLeft && timeLeft["hours"]}:{timeLeft && timeLeft["minutes"]}:
            {timeLeft && timeLeft["seconds"]} left <br />
            Order HK$600 by 4pm for FREE SAME DAY DELIVERY!
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}

export default Banner
