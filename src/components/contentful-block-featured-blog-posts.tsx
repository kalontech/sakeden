import React from "react"
import { Box, Grid, Heading } from "theme-ui"

import {
  ContentfulBlockFeaturedBlogPosts as ContentfulBlockFeaturedBlogPostsProps,
  ContentfulBlogPost,
} from "../../graphql-types"
import BlogPostCard from "./blog-post-card"

const ContentfulBlockFeaturedBlogPosts: React.FC<ContentfulBlockFeaturedBlogPostsProps> = ({
  blogPosts,
  title,
}) => {
  return (
    <Box my={5}>
      <Heading as="h2" sx={{ mb: 3, textAlign: "center" }} variant="h2">
        {title}
      </Heading>
      <Grid columns={[1, 1, 3, 3]} gap="20px">
        {blogPosts &&
          blogPosts.map(blogPost => {
            return <BlogPostCard node={blogPost as ContentfulBlogPost} />
          })}
      </Grid>
    </Box>
  )
}

export default ContentfulBlockFeaturedBlogPosts
