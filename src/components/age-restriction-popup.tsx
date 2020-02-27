import React, { useContext } from "react"
import { Box, Button, Flex, Text } from "theme-ui"

import AppContext from "../app-context"
// @ts-ignore
import Logo from "../images/logo.svg"

const AgeRestrictionPopup: React.FC = () => {
  const { setIsAgeRestrictionVisible } = useContext(AppContext)

  return (
    <Box
      sx={{
        bg: "secondary",
        height: "100vh",
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "scroll",
        p: 4,
        width: "100vw",
      }}
    >
      <Flex
        sx={{
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          maxWidth: "600px",
          mx: "auto",
        }}
      >
        <Logo />
        <Text sx={{ mt: 4, textAlign: "center" }}>
          SAKEDEN is committed to the responsible enjoyment of sake. Please
          confirm that you are 18 or older
        </Text>
        <Button
          onClick={(): void => {
            setIsAgeRestrictionVisible(false)
          }}
          sx={{ mt: 4, width: "100%" }}
        >
          Yes, I am 18 or older
        </Button>
      </Flex>
    </Box>
  )
}

export default AgeRestrictionPopup
