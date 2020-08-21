import moment from "moment"
import React, { useEffect, useState } from "react"
import Countdown from "react-countdown"
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

// From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number,
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  }
}

function describeArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number,
) {
  const start = polarToCartesian(x, y, radius, endAngle)
  const end = polarToCartesian(x, y, radius, startAngle)

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"

  const d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ")

  return d
}

function mapNumber(
  number: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number,
) {
  return ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

const SVGCircle = ({ radius }: any) => (
  <svg className="countdown-svg" width={100} height={100}>
    <path
      fill="none"
      stroke="white"
      stroke-width="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
)

const Banner: React.FC<BannerProps> = () => {
  const [timeLeft, setTimeLeft] = useState<any>({})
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(new Date()))
    }, 1000)
    return () => clearTimeout(timer)
  })
  const renderer = ({ days, hours, minutes, seconds }: any): any => {
    const daysRadius = mapNumber(days, 0, 30, 0, 360)
    const hoursRadius = mapNumber(hours, 0, 24, 0, 360)
    const minutesRadius = mapNumber(minutes, 0, 60, 0, 360)
    const secondsRadius = mapNumber(seconds, 0, 60, 0, 360)
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
            {/* <SVGCircle radius={daysRadius} /> */}
            <Text
              sx={{ color: "white", textAlign: "center" }}
              style={{ fontSize: 24 }}
            >
              {days}
            </Text>
            <Text sx={{ color: "white", textAlign: "center" }}>days</Text>
          </Box>
          <Box sx={{ mx: 2 }}>
            {/* <SVGCircle radius={hoursRadius} /> */}
            <Text
              sx={{ color: "white", textAlign: "center" }}
              style={{ fontSize: 24 }}
            >
              {hours}
            </Text>
            <Text sx={{ color: "white", textAlign: "center" }}>hours</Text>
          </Box>
          <Box sx={{ mx: 2 }}>
            {/* <SVGCircle radius={minutesRadius} /> */}
            <Text
              sx={{ color: "white", textAlign: "center" }}
              style={{ fontSize: 24 }}
            >
              {minutes}
            </Text>
            <Text sx={{ color: "white", textAlign: "center" }}>minutes</Text>
          </Box>
          <Box sx={{ mx: 2 }}>
            {/* <SVGCircle radius={secondsRadius} /> */}
            <Text
              sx={{ color: "white", textAlign: "center" }}
              style={{ fontSize: 24 }}
            >
              {seconds}
            </Text>
            <Text sx={{ color: "white", textAlign: "center" }}>seconds</Text>
          </Box>
        </Flex>
        <Text sx={{ color: "white", textAlign: "center" }}>
          Order HK$600 by 4pm for FREE SAME DAY DELIVERY!
        </Text>
      </Box>
    )
  }
  return (
    <Box sx={{ bg: "black" }}>
      <Container>
        <Flex
          sx={{
            alignItems: "center",
            // height: "64px",
            justifyContent: "center",
            py: 2,
          }}
        >
          <Countdown date={new Date("2020-09-18")} renderer={renderer} />
        </Flex>
      </Container>
    </Box>
  )
}

export default Banner
