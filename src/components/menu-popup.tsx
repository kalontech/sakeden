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
        backgroundPosition: "bottom right",
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
          <InternalLink href="/products">
            <Heading as="h2" variant="h2">
              Collection
            </Heading>
          </InternalLink>
        </Box>
        <Box py={2}>
          <InternalLink href="/about">
            <Heading as="h2" variant="h2">
              About
            </Heading>
          </InternalLink>
        </Box>
        <Box py={2}>
          <InternalLink href="/contact">
            <Heading as="h2" variant="h2">
              Contact
            </Heading>
          </InternalLink>
        </Box>
        <Flex mt={3} sx={{ justifyContent: "center" }}>
          <Box px={2}>
            <ExternalLink href="https://www.instagram.com/sake_den">
              <TiSocialInstagram fontSize="36px" />
            </ExternalLink>
          </Box>
          <Box px={2}>
            <ExternalLink href="https://www.facebook.com/Sakeden-112334880273667">
              <IoLogoFacebook fontSize="36px" />
            </ExternalLink>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default MenuPopup
