import "react-day-picker/lib/style.css"
import "./layout.css"

import React from "react"
import { Container } from "theme-ui"

// @ts-ignore
import Logo from "../images/logo.svg"
import Header from "./header"
import Modals from "./modals"

interface LayoutProps {
  children: React.ReactNode
  narrow?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, narrow }) => {
  return (
    <>
      <Modals />
      <Header logo={<Logo />} />
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
