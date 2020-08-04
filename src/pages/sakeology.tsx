import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Box, Grid, Heading } from "theme-ui"

import { BlogPostsPageQuery, ContentfulBlogPost } from "../../graphql-types"
import BlogPostCard from "../components/blog-post-card"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostsPage: React.FC = () => {
  const { allContentfulBlogPost } = useStaticQuery<BlogPostsPageQuery>(
    graphql`
      query BlogPostsPage {
        allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
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
    <>
      <SEO title="Sakeology" />
      <Layout>
        <Box sx={{ display: ["none", "none", "block", "block"] }}>
          <Heading
            as="h1"
            mb={3}
            sx={{ textTransform: "uppercase" }}
            variant="h1"
          >
            Sakeology
          </Heading>
        </Box>
        <Box sx={{ display: ["block", "block", "none", "none"] }}>
          <Heading
            as="h2"
            mb={3}
            sx={{ textTransform: "uppercase" }}
            variant="h2"
          >
            Sakeology
          </Heading>
        </Box>
        <Grid columns={[1, 1, 1, 1]} gap="30px">
          {allContentfulBlogPost &&
            allContentfulBlogPost.edges.map(({ node }) => {
              return <BlogPostCard node={node as ContentfulBlogPost} />
            })}
        </Grid>
      </Layout>
    </>
  )
}

export default BlogPostsPage
