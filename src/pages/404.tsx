import React from "react"
import { Heading, Text } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="Not Found" />
    <Heading as="h1" variant="h1">
      Not Found
    </Heading>
    <Text>You just hit a route that doesn't exist... the sadness.</Text>
  </Layout>
)

export default NotFoundPage
