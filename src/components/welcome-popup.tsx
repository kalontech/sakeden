import { graphql, useStaticQuery } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
// @ts-ignore
import addToMailchimp from "gatsby-plugin-mailchimp"
import React, { useContext, useState } from "react"
import { IoMdClose } from "react-icons/io"
import { Box, Button, Flex, Input, Text } from "theme-ui"

import { WelcomePopupImageQuery } from "../../graphql-types"
import AppContext from "../app-context"

const WelcomePopup: React.FC = () => {
  const { setIsWelcomeVisible } = useContext(AppContext)
  const [email, setEmail] = useState("")
  const { file: logoInCircleImage } = useStaticQuery<
    WelcomePopupImageQuery
  >(graphql`
    query WelcomePopupImage {
      file(relativePath: { eq: "logo-in-circle.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const handleSubmit = async (): Promise<void> => {
    try {
      await addToMailchimp(email)
      await fetch(
        `https://sakeden-v2.netlify.app/.netlify/functions/tag-mailchimp-user?email=${email}&tag=updates`,
      )
      setIsWelcomeVisible(false)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Box
      sx={{
        bg: "secondary",
        height: ["100vh", "100vh", "auto", "auto"],
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "scroll",
        p: 4,
        width: ["100vw", "100vw", "500px", "500px"],
      }}
    >
      <Flex
        sx={{
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          maxWidth: "500px",
          mx: "auto",
        }}
      >
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <Button
            onClick={(): void => {
              setIsWelcomeVisible(false)
            }}
            variant="iconInverted"
          >
            <IoMdClose />
          </Button>
        </Flex>
        {logoInCircleImage && (
          <Image
            fluid={logoInCircleImage.childImageSharp!.fluid! as FluidObject}
            imgStyle={{ objectFit: "contain" }}
            style={{ height: "250px", width: "100%" }}
          />
        )}
        <Text sx={{ mt: 4, textAlign: "center" }}>
          Welcome to SAKEDEN. Let us know how to keep in touch and we’ll give
          you $80 off your first order with an exclusive discount code!
        </Text>
        <Input
          mt={3}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            setEmail(e.target.value)
          }}
          placeholder="Email"
          value={email}
          variant="borderless"
        />
        <Button onClick={handleSubmit} sx={{ mt: 4, width: "100%" }}>
          Kampai!
        </Button>
      </Flex>
    </Box>
  )
}

export default WelcomePopup
