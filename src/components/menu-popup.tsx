import { graphql, useStaticQuery } from "gatsby"
import React, { useContext } from "react"
import { IoLogoFacebook, IoMdClose } from "react-icons/io"
import { TiSocialInstagram } from "react-icons/ti"
import { Box, Button, Flex, Heading } from "theme-ui"

import { MenuBackgroundImageQuery } from "../../graphql-types"
import AppContext from "../app-context"
import { ExternalLink, InternalLink } from "./link"

const MenuPopup: React.FC = () => {
  const { setIsMenuVisible } = useContext(AppContext)
  const { file: menuBackgroundImage } = useStaticQuery<
    MenuBackgroundImageQuery
  >(graphql`
    query MenuBackgroundImage {
      file(relativePath: { eq: "menu-background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Box
      bg="secondary"
      sx={{
        backgroundImage: `url(${
          menuBackgroundImage!.childImageSharp!.fluid!.src
        })`,
        backgroundPosition: "100px 500px",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        maxWidth: "100%",
        overflow: "hidden",
        position: "relative",
        width: ["100vw", "100vw", "300px", "300px"],
      }}
    >
      <Button
        onClick={(): void => {
          setIsMenuVisible(false)
        }}
        sx={{
          borderBottomColor: "gray",
          borderBottomStyle: "solid",
          borderBottomWidth: "1px",
          height: "120px",
          width: "100%",
        }}
        variant="iconInverted"
      >
        <IoMdClose />
        <Heading as="h5" variant="h5">
          Close
        </Heading>
      </Button>
      <Box p={4}>
        <Box py={2}>
          <InternalLink
            href="/bottles"
            onClick={(): void => {
              setIsMenuVisible(false)
            }}
          >
            <Heading as="h2" variant="h2">
              Bottles
            </Heading>
          </InternalLink>
        </Box>
        <Box py={2}>
          <InternalLink
            href="/sets"
            onClick={(): void => {
              setIsMenuVisible(false)
            }}
          >
            <Heading as="h2" variant="h2">
              Sets
            </Heading>
          </InternalLink>
        </Box>
        <Box py={2}>
          <InternalLink
            href="/products/sakeden-sub-club"
            onClick={(): void => {
              setIsMenuVisible(false)
            }}
          >
            <Heading as="h2" variant="h2">
              Subscription
            </Heading>
          </InternalLink>
        </Box>
        <Box py={2}>
          <InternalLink
            href="/sakeology"
            onClick={(): void => {
              setIsMenuVisible(false)
            }}
          >
            <Heading as="h2" variant="h2">
              Sakeology
            </Heading>
          </InternalLink>
        </Box>
        <Box py={2}>
          <InternalLink
            href="/about"
            onClick={(): void => {
              setIsMenuVisible(false)
            }}
          >
            <Heading as="h2" variant="h2">
              About
            </Heading>
          </InternalLink>
        </Box>
        <Box py={2}>
          <InternalLink
            href="/contact"
            onClick={(): void => {
              setIsMenuVisible(false)
            }}
          >
            <Heading as="h2" variant="h2">
              Contact
            </Heading>
          </InternalLink>
        </Box>
        <Flex mt={3} sx={{ justifyContent: "center" }}>
          <Box px={2}>
            <ExternalLink href={process.env.SOCIAL_INSTAGRAM_URL!}>
              <TiSocialInstagram fontSize="36px" />
            </ExternalLink>
          </Box>
          <Box px={2}>
            <ExternalLink href={process.env.SOCIAL_FACEBOOK_URL!}>
              <IoLogoFacebook fontSize="36px" />
            </ExternalLink>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default MenuPopup
