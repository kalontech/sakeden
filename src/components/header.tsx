/** @jsx jsx */

import { Link } from "gatsby"
import React from "react"
import { MdShoppingCart } from "react-icons/md"
import { Box, Container, Flex, jsx } from "theme-ui"

interface HeaderProps {
  title?: string
}

const Header: React.FC<HeaderProps> = ({ title = "" }) => (
  <Box bg="primary">
    <Container>
      <Flex
        sx={{
          alignItems: "center",
          height: "80px",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Link to="/" sx={{ color: "inherit" }}>
            {title}
          </Link>
        </Box>
        <Box>
          <Link to="/cart" sx={{ color: "inherit" }}>
            <MdShoppingCart size="24px" />
          </Link>
        </Box>
      </Flex>
    </Container>
  </Box>
)

export default Header
