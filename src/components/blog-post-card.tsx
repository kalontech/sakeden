import Image, { FluidObject } from "gatsby-image"
import moment from "moment"
import React from "react"
import { Box, Button, Flex, Heading, Text } from "theme-ui"

import { ContentfulBlogPost } from "../../graphql-types"
import { InternalLink } from "./link"

interface BlogPostCardProps {
  node: ContentfulBlogPost
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ node }) => {
  return (
    <InternalLink href={`/blog-posts/${node.id}`}>
      <Flex
        bg="muted"
        p={3}
        sx={{
          ":hover": {
            boxShadow: "0px 3px 5px 3px rgba(0, 0, 0, 0.1)",
          },
          boxShadow: "0px 3px 5px 1px rgba(0, 0, 0, 0.05)",
          flexDirection: "column",
          height: "100%",
          transition: "200ms ease-in-out",
        }}
      >
        <Heading as="h4" variant="h4">
          {node.title}
        </Heading>
        <Text sx={{ color: "gray" }}>
          {moment(node.createdAt).format("MMMM DD, YYYY")}
        </Text>
        {node.heroImage && (
          <Box sx={{ my: 3 }}>
            <Image
              fluid={node.heroImage.fluid as FluidObject}
              style={{ height: "210px" }}
            />
          </Box>
        )}
        <Text>{node.description!.description}</Text>
        <Button>Read more</Button>
      </Flex>
    </InternalLink>
  )
}

export default BlogPostCard
