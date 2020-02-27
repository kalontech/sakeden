import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage: React.FC = () => {
  useEffect(() => {
    window.location.replace("/products/sakeden-sub-club")
  }, [])

  return (
    <Layout>
      <SEO title="Redirect" />
    </Layout>
  )
}

export default IndexPage
