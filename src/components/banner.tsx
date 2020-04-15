import React from "react"
import { Box, Container, Flex, Text } from "theme-ui"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
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
            Order HK$400 to enjoy FREE DELIVERY for all HK addresses
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}

export default Banner
