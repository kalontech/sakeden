// @ts-ignore
import addToMailchimp from "gatsby-plugin-mailchimp"
import React, { useState } from "react"
import { Box, Button, Flex, Heading, Input, Text } from "theme-ui"

import Layout from "../components/layout"
import { InternalLink } from "../components/link"
import SEO from "../components/seo"

const AboutPage: React.FC = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (
    e: React.FormEvent<HTMLDivElement>,
  ): Promise<void> => {
    e.preventDefault()

    try {
      await addToMailchimp(email, {
        LNAME: name,
        PHONE: phoneNumber,
      })
      setIsSubmitted(true)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Layout>
      <SEO title="About" />
      <Flex
        sx={{
          flexDirection: ["column", "column", "row", "row"],
          height: "100%",
        }}
      >
        <Flex
          sx={{ flex: 0.6, flexDirection: "column", justifyContent: "center" }}
        >
          <Heading as="h1" variant="h1">
            Sakeden
          </Heading>
          <Text>
            Born out of an admiration for this centuries-old craft, SAKEDEN is
            passionate about the art of brewing sake. Shrouded in tradition for
            hundreds of years, the art of brewing sake is a delicate and careful
            seasonal process, finessed and fine-tuned by generations of
            artisans. Many of these humble family-owned breweries remain hidden
            from view, and SAKEDEN is dedicated to discovering, demystifying and
            delivering small-batch, hand crafted artisan sake direct to you from
            these breweries in Japan.
          </Text>
          <Box mt={4}>
            <InternalLink href="/">
              <Button>Sake collection</Button>
            </InternalLink>
          </Box>
        </Flex>
        <Box p={4} />
        <Flex
          sx={{ flex: 0.4, flexDirection: "column", justifyContent: "center" }}
        >
          {isSubmitted ? (
            <>
              <Heading as="h2" variant="h2">
                Thanks for signing up!
              </Heading>
              <Text>
                We got you covered for $80 HKD on your first order! We'll keep
                you posted on new developments and send out a special code to
                you soon!
              </Text>
            </>
          ) : (
            <>
              <Heading as="h2" variant="h2">
                Stay connected
              </Heading>
              <Box as="form" onSubmit={handleSubmit}>
                <Input
                  my={3}
                  name="name"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                    setName(e.target.value)
                  }}
                  placeholder="Name"
                  value={name}
                  variant="borderless"
                />
                <Input
                  my={3}
                  name="phoneNumber"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                    setPhoneNumber(e.target.value)
                  }}
                  placeholder="Phone number"
                  value={phoneNumber}
                  variant="borderless"
                />
                <Input
                  my={3}
                  name="email"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                    setEmail(e.target.value)
                  }}
                  type="email"
                  placeholder="Email"
                  value={email}
                  variant="borderless"
                />
                <Button mt={4}>Submit</Button>
              </Box>
            </>
          )}
        </Flex>
      </Flex>
    </Layout>
  )
}

export default AboutPage
