import React from "react"
import { Box, Container } from "theme-ui"

// @ts-ignore
import Logo from "../images/logo.svg"
import Header from "./header"
import Modals from "./modals"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Modals />
      <Header logo={<Logo />} />
      <Container>
        <Box py={4}>{children}</Box>
      </Container>
    </>
  )
}

export default Layout
