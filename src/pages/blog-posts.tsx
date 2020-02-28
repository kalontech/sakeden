import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Grid, Heading } from "theme-ui"

import { BlogPostsPageQuery, ContentfulBlogPost } from "../../graphql-types"
import BlogPostCard from "../components/blog-post-card"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostsPage: React.FC = () => {
  const { allContentfulBlogPost } = useStaticQuery<BlogPostsPageQuery>(
    graphql`
      query BlogPostsPage {
        allContentfulBlogPost {
          edges {
            node {
              description {
                description
              }
              image {
                id
                fluid {
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
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
      <SEO title="Blog" />
      <Layout>
        <Heading
          as="h1"
          mb={3}
          sx={{ textTransform: "uppercase" }}
          variant="h1"
        >
          Blog
        </Heading>
        <Grid columns={[1, 1, 3, 3]} gap="20px">
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
