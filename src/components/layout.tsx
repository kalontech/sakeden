import "react-day-picker/lib/style.css"
import "./layout.css"

import React from "react"
import { Box, Container } from "theme-ui"

// @ts-ignore
import Logo from "../images/logo.svg"
import Banner from "./banner"
import Header from "./header"
import MenuPopup from "./menu-popup"
import Modals from "./modals"

interface LayoutProps {
  children: React.ReactNode
  narrow?: boolean
  showBanner?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, narrow, showBanner = true }) => {
  return (
    <>
      <Box sx={{ display: "none" }}>
        <MenuPopup />
      </Box>
      <Modals />
      <Header logo={<Logo />} />
      {showBanner && (
        <Banner />
      )}
      <Container
        py={4}
        variant={narrow ? "containerNarrow" : "container"}
        sx={{ flex: 1 }}
      >
        {children}
      </Container>
    </>
  )
}

export default Layout
