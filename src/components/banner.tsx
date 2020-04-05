import React from "react"
import { IoMdClose } from "react-icons/io"
import { Box, Button, Container, Flex, Text } from "theme-ui"
import createPersistedState from "use-persisted-state"

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
          <Text sx={{ color: "white" }}>
            Order HK$400 to enjoy FREE DELIVERY for all HK addresses
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}

export default Banner
