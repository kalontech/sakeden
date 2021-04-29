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
  sx?: any
  noBanner?: boolean
  noPaddingHeader?: boolean
  pt?: any
}

const Layout: React.FC<LayoutProps> = ({
  children,
  sx,
  pt = 4,
  narrow,
  noBanner = false,
  noPaddingHeader = false,
}) => {
  return (
    <Box sx={sx}>
      <Box sx={{ display: "none" }}>
        <MenuPopup />
      </Box>
      <Modals />
      <Header logo={<Logo />} />
      {!noBanner && <Banner />}
      <Container
        pt={pt}
        pb={4}
        variant={narrow ? "containerNarrow" : "container"}
        sx={{ flex: 1 }}
      >
        {children}
      </Container>
    </Box>
  )
}

export default Layout
