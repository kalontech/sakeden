import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Container } from "theme-ui"

import Header from "./header"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header title={data.site.siteMetadata.title} />
      <Container>{children}</Container>
    </>
  )
}

export default Layout
