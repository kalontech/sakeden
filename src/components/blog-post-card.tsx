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
        <Heading as="h4" variant="h4">
          {node.title}
        </Heading>
        <Text sx={{ color: "gray", fontSize: 1 }}>
          {moment(node.publishDate).format("MMMM DD, YYYY")}
        </Text>
        <Flex
          sx={{
            flexDirection: ["column", "column", "row", "row"],
            height: "100%",
            // justifyContent: "space-between",
          }}
        >
          {node.image && (
            <Box sx={{ my: 3 }}>
              <Image
                fluid={
                  node.image.localFile!.childImageSharp!.fluid as FluidObject
                }
                style={{ width: "300px", height: "210px" }}
              />
            </Box>
          )}
          <Box sx={{ m: [0, 0, 3, 3], width: ["100%", "100%", "70%", "70%"] }}>
            {node.description && <Text>{node.description.description}</Text>}
          </Box>
        </Flex>
      </Card>
    </InternalLink>
  )
}

export default BlogPostCard
