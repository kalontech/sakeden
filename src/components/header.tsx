/** @jsx jsx */

import { Link } from "gatsby"
import React, { useContext } from "react"
import { MdMenu, MdShoppingCart } from "react-icons/md"
import { useScrollYPosition } from "react-use-scroll-position"
import { Box, Button, Container, Flex, jsx } from "theme-ui"

import AppContext from "../app-context"

interface HeaderProps {
  logo?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const { setIsCartVisible, setIsMenuVisible } = useContext(AppContext)
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
              <Link to="/" sx={{ color: "inherit", textDecoration: "none" }}>
                {logo}
              </Link>
            </Box>
            <Flex>
              <Box>
                <Button
                  onClick={(): void => {
                    setIsCartVisible(true)
                  }}
                  variant="iconInverted"
                >
                  <MdShoppingCart />
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
