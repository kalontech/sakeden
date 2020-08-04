import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Box, Button, Grid, Heading } from "theme-ui"

import {
  BlogPostsPageQuery,
  ContentfulBlockFeaturedBlogPosts as ContentfulBlockFeaturedBlogPostsProps,
  ContentfulBlogPost,
} from "../../graphql-types"
import BlogPostCard from "./blog-post-card"
import { InternalLink } from "./link"

const ContentfulBlockFeaturedBlogPosts: React.FC<ContentfulBlockFeaturedBlogPostsProps> = ({
  blogPosts,
  title,
}) => {
  const { allContentfulBlogPost } = useStaticQuery<BlogPostsPageQuery>(
    graphql`
      query FeaturedBlogPostsPage {
        allContentfulBlogPost(
          sort: { fields: [publishDate], order: DESC }
          limit: 6
        ) {
          edges {
            node {
              description {
                description
              }
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              publishDate
              slug
              title
            }
          }
        }
      }
    `,
  )
  return (
    <Box my={5}>
      <Heading as="h2" sx={{ mb: 3, textAlign: "center" }} variant="h2">
        {title}
      </Heading>
      <Grid columns={[1, 1, 1, 1]} gap="30px">
        {allContentfulBlogPost &&
          allContentfulBlogPost.edges.map(({ node }) => {
            return <BlogPostCard node={node as ContentfulBlogPost} />
          })}
      </Grid>
      <Box p={1} />
      <InternalLink href="/sakeology">
        <Button sx={{ mt: 4, mx: "auto" }}>View sakeology</Button>
      </InternalLink>
    </Box>
  )
}

export default ContentfulBlockFeaturedBlogPosts
