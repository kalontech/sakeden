import { Link } from "gatsby"
import React, { useContext } from "react"
import { MdMenu, MdPerson, MdShoppingCart } from "react-icons/md"
import { useScrollYPosition } from "react-use-scroll-position"
import { Box, Button, Container, Flex, Text } from "theme-ui"

import AppContext from "../app-context"
import { InternalLink } from "./link"

interface HeaderProps {
  logo?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const {
    checkout,
    setIsCartVisible,
    setIsMenuVisible,
    shopifyAccessToken,
  } = useContext(AppContext)
  const scrollY = useScrollYPosition()

  const isSticky = scrollY > 0

  return (
    <Box pt="100px">
      <Box
        bg="secondary"
        sx={{
          border: "1px solid #eee",
          boxShadow: isSticky ? "0px 3px 5px 1px rgba(0, 0, 0, 0.1)" : "none",
          left: 0,
          position: "fixed",
          right: 0,
          top: 0,
          transition: "100ms ease-in-out",
          zIndex: 100,
        }}
      >
        <Container>
          <Flex
            sx={{
              alignItems: "center",
              height: isSticky ? "70px" : "100px",
              justifyContent: "space-between",
              transition: "100ms ease-in-out",
            }}
          >
            <Box>
              <InternalLink href="/">{logo}</InternalLink>
            </Box>
            <Flex>
              <Box>
                <Link to="/login">
                  <Button variant="iconInverted">
                    <MdPerson />
                  </Button>
                </Link>
              </Box>
              <Box>
                <Button
                  onClick={(): void => {
                    setIsCartVisible(true)
                  }}
                  variant="iconInverted"
                >
                  <MdShoppingCart />
                  <Text
                    sx={{
                      bottom: "-2px",
                      fontSize: "14px",
                      position: "absolute",
                      right: "2px",
                    }}
                  >
                    {checkout && checkout.lineItems
                      ? checkout.lineItems.length
                      : 0}
                  </Text>
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={(): void => {
                    setIsMenuVisible(true)
                  }}
                  variant="iconInverted"
                >
                  <MdMenu />
                </Button>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

export default Header
