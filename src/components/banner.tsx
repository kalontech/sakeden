import React from "react"
import { IoMdClose } from "react-icons/io"
import { Box, Button, Container, Flex, Text } from "theme-ui"
import createPersistedState from "use-persisted-state"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BannerProps {}

const useIsBannerVisible = createPersistedState("isBannerVisible")

const Banner: React.FC<BannerProps> = () => {
  const [isBannerVisible, setIsBannerVisible] = useIsBannerVisible(true)

  if (!isBannerVisible) {
    return <Flex />
  }

  return (
    <Box sx={{ bg: "black" }}>
      <Container>
        <Flex
          sx={{
            alignItems: "center",
            height: "64px",
            justifyContent: "space-between",
          }}
        >
          <Box />
          <Text sx={{ color: "white" }}>
            Order HK$700 to enjoy FREE DELIVERY
          </Text>
          <Button
            onClick={(): void => {
              setIsBannerVisible(false)
            }}
            variant="icon"
          >
            <IoMdClose />
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}

export default Banner
