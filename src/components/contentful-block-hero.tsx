import Image, { FluidObject } from "gatsby-image"
import React from "react"
import { Parallax } from "react-parallax"
import { Box, Heading, Text } from "theme-ui"

import { ContentfulBlockHero as ContentfulBlockHeroProps } from "../../graphql-types"

const ContentfulBlockHero: React.FC<ContentfulBlockHeroProps> = ({
  bottomText,
  picture,
  subtitle,
  title,
}) => {
  return (
    <Box my={5}>
      {picture && (
        <Box sx={{ my: 4 }}>
          <Parallax bgImage={picture.resize!.src!} strength={200}>
            <div style={{ height: "400px" }} />
          </Parallax>
        </Box>
      )}
      <Box sx={{ display: ["none", "none", "block", "block"] }}>
        <Heading as="h1" sx={{ textAlign: "center" }} variant="h1">
          {title}
        </Heading>
      </Box>
      <Box sx={{ display: ["block", "block", "none", "none"] }}>
        <Heading as="h2" sx={{ textAlign: "center" }} variant="h2">
          {title}
        </Heading>
      </Box>
      <Text sx={{ textAlign: "center" }}>{subtitle}</Text>
      <Text sx={{ textAlign: "center" }}>{bottomText}</Text>
    </Box>
  )
}

export default ContentfulBlockHero
