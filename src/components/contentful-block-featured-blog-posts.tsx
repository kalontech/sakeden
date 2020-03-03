import React from "react"
import { Box, Button, Grid, Heading } from "theme-ui"

import {
  ContentfulBlockFeaturedBlogPosts as ContentfulBlockFeaturedBlogPostsProps,
  ContentfulBlogPost,
} from "../../graphql-types"
import BlogPostCard from "./blog-post-card"
import { InternalLink } from "./link"

const ContentfulBlockFeaturedBlogPosts: React.FC<ContentfulBlockFeaturedBlogPostsProps> = ({
  blogPosts,
  title,
}) => {
  return (
    <Box my={5}>
      <Heading as="h2" sx={{ mb: 3, textAlign: "center" }} variant="h2">
        {title}
      </Heading>
      <Grid columns={[1, 1, 3, 3]} gap="30px">
        {blogPosts &&
          blogPosts.map(blogPost => {
            return <BlogPostCard node={blogPost as ContentfulBlogPost} />
          })}
      </Grid>
      <Box p={1} />
      <InternalLink href="/blog-posts">
        <Button sx={{ mt: 4, mx: "auto" }}>View all posts</Button>
      </InternalLink>
    </Box>
  )
}

export default ContentfulBlockFeaturedBlogPosts
