import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage: React.FC = () => {
  useEffect(() => {
    window.location.replace("/products")
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
