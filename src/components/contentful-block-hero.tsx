import Image, { FluidObject } from "gatsby-image"
import React from "react"
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
      <Heading as="h1" sx={{ textAlign: "center" }} variant="h1">
        {title}
      </Heading>
      <Text sx={{ textAlign: "center" }}>{subtitle}</Text>
      {picture && (
        <Box sx={{ my: 4 }}>
          <Image
            fluid={picture.fluid as FluidObject}
            style={{ height: "300px" }}
          />
        </Box>
      )}
      <Text sx={{ textAlign: "center" }}>{bottomText}</Text>
    </Box>
  )
}

export default ContentfulBlockHero
