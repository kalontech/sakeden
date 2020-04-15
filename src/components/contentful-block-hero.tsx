import Image, { FixedObject, FluidObject } from "gatsby-image"
import React from "react"
import Markdown from "react-markdown"
import { Box, Heading, Text } from "theme-ui"

import { ContentfulBlockHero as ContentfulBlockHeroProps } from "../../graphql-types"

const ContentfulBlockHero: React.FC<ContentfulBlockHeroProps> = ({
  title,
  picture,
  pictureText,
}) => {
  return (
    <Box mb={5} mt={2}>
      <Heading as="h1" sx={{ textAlign: "center" }} variant="h1">
        {title}
      </Heading>
      {picture && (
        <Box sx={{ my: 4 }}>
          <Image
            fluid={picture.localFile!.childImageSharp!.fluid as FluidObject}
            style={{ height: "300px" }}
          />
        </Box>
      )}
      {pictureText && (
        <Markdown
          renderers={{
            heading: ({ children, level }) => {
              return (
                <Heading
                  as={`h${level + 1}` as "h2" | "h3" | "h4"}
                  sx={{ mb: 3, mt: 4 }}
                  variant={`h${level + 2}` as "h2" | "h3" | "h4"}
                >
                  {children}
                </Heading>
              )
            },
            image: ({ alt, src }) => {
              if (src.endsWith(".mp4")) {
                return (
                  <Box sx={{ my: 4 }}>
                    <video controls style={{ width: "100%" }}>
                      <source src={src} />
                    </video>
                  </Box>
                )
              }

              return (
                <Box sx={{ my: 4 }}>
                  <Image
                    fixed={{ src } as FixedObject}
                    style={{ height: "60vh", width: "100%" }}
                  />
                  <Text sx={{ color: "gray", fontSize: 1, mt: 1 }}>{alt}</Text>
                </Box>
              )
            },
            paragraph: ({ children }) => {
              return <Text sx={{ textAlign: "center" }}>{children}</Text>
            },
            root: ({ children }) => {
              return <Box sx={{ my: 3 }}>{children}</Box>
            },
          }}
          source={pictureText?.pictureText!}
        />
      )}
    </Box>
  )
}

export default ContentfulBlockHero
