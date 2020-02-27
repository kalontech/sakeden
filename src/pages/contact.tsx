import { encode } from "querystring"
import React, { useState } from "react"
import { Box, Button, Flex, Heading, Input, Text, Textarea } from "theme-ui"

import Layout from "../components/layout"
import { InternalLink } from "../components/link"
import SEO from "../components/seo"

const ContactPage: React.FC = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [enquiry, setEnquiry] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (
    e: React.FormEvent<HTMLDivElement>,
  ): Promise<void> => {
    e.preventDefault()

    try {
      await fetch("/", {
        body: encode({
          email,
          enquiry,
          "form-name": "Contact Us",
          name,
        }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        method: "POST",
      })
      setIsSubmitted(true)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <Flex
        sx={{
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Box sx={{ maxWidth: "400px" }}>
          <Heading as="h2" variant="h2">
            Contact
          </Heading>
          <Text mt={2}>
            Get in touch with us! Ask us anything about SAKEDEN. If you are a
            brewery wanting to join our collection, have a special request for
            an event, want to arrange a private sake tasting for friends,
            looking for that one bottle that you just can’t find, or simply want
            to share your love of the art of brewing sake with us, contact us
            using the form below. We would love to hear from you.
          </Text>
          <Box as="form" onSubmit={handleSubmit}>
            <Input
              my={3}
              name="name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setName(e.target.value)
              }}
              placeholder="Name"
              variant="borderless"
              value={name}
            />
            <Input
              my={3}
              name="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setEmail(e.target.value)
              }}
              placeholder="Email"
              type="email"
              value={email}
              variant="borderless"
            />
            <Textarea
              my={3}
              name="enquiry"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => {
                setEnquiry(e.target.value)
              }}
              placeholder="Enquiry"
              value={enquiry}
              variant="borderless"
            />
            <Button mt={4} sx={{ width: "100%" }}>
              Submit
            </Button>
          </Box>
        </Box>
      </Flex>
    </Layout>
  )
}

export default ContactPage
