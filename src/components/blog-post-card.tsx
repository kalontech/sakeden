import Image, { FluidObject } from "gatsby-image"
import moment from "moment"
import React from "react"
import { Box, Button, Flex, Heading, Text } from "theme-ui"

import { ContentfulBlogPost } from "../../graphql-types"
import Card from "./card"
import { InternalLink } from "./link"

interface BlogPostCardProps {
  node: ContentfulBlogPost
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ node }) => {
  return (
    <InternalLink href={`/sakeology/${node.slug}`}>
      <Card>
        <Flex
          sx={{
            flexDirection: ["column", "column", "row", "row"],
            height: "100%",
            // justifyContent: "space-between",
          }}
        >
          {node.image && (
            <Box sx={{ my: 3, width: ["100%", "100%", "400px", "400px"] }}>
              <Image
                fluid={
                  node.image.localFile!.childImageSharp!.fluid as FluidObject
                }
                style={{
                  width: "100%",
                  height: "210px",
                }}
              />
            </Box>
          )}
          <Flex
            sx={{
              flexDirection: "column",
              justifyContent: "space-between",
              m: [0, 0, 3, 3],
              width: ["100%", "100%", "60%", "60%"],
            }}
          >
            <Box>
              <Heading as="h4" variant="h4">
                {node.title}
              </Heading>
              <Text sx={{ color: "gray", fontSize: 1 }}>
                {moment(node.publishDate).format("MMMM DD, YYYY")}
              </Text>
              {node.description && <Text>{node.description.description}</Text>}
            </Box>
            <Flex
              sx={{
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {node.tags &&
                node.tags.map(tag => (
                  <Box
                    sx={{
                      mr: 3,
                      mt: 2,
                      p: 2,
                    }}
                    style={{
                      backgroundColor: "lightgrey",
                      borderRadius: "5px",
                    }}
                  >
                    {tag}
                  </Box>
                ))}
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </InternalLink>
  )
}

export default BlogPostCard
