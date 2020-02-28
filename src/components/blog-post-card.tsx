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
    <InternalLink href={`/blog-posts/${node.slug}`}>
      <Card>
        <Flex
          sx={{
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Heading as="h4" variant="h4">
              {node.title}
            </Heading>
            <Text sx={{ color: "gray", fontSize: 1 }}>
              {moment(node.publishDate).format("MMMM DD, YYYY")}
            </Text>
            {node.image && (
              <Box sx={{ my: 2 }}>
                <Image
                  fluid={node.image.fluid as FluidObject}
                  style={{ height: "210px" }}
                />
              </Box>
            )}
            <Text>{node.description!.description}</Text>
          </Box>
          <Button sx={{ mt: 3 }}>Read more</Button>
        </Flex>
      </Card>
    </InternalLink>
  )
}

export default BlogPostCard
