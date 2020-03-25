import { graphql, ReplaceComponentRendererArgs } from "gatsby"
import Image, { FixedObject } from "gatsby-image"
import moment from "moment"
import React from "react"
import Markdown from "react-markdown"
import { Box, Flex, Heading, Text } from "theme-ui"

import { BlogPostQuery, ContentfulBlogPost } from "../../graphql-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialBar from "../components/social-bar"

const BlogPostPage: React.FC<ReplaceComponentRendererArgs["props"]> = props => {
  const data = props.data as BlogPostQuery
  const contentfulBlogPost = data.contentfulBlogPost as ContentfulBlogPost

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  return (
    <>
      <SEO title={contentfulBlogPost.title!} />
      <Layout narrow>
        <Box mb={3}>
          <Box sx={{ display: ["none", "none", "block", "block"] }}>
            <Heading as="h1" variant="h1">
              {contentfulBlogPost.title}
            </Heading>
          </Box>
          <Box sx={{ display: ["block", "block", "none", "none"] }}>
            <Heading as="h2" variant="h2">
              {contentfulBlogPost.title}
            </Heading>
          </Box>
        </Box>
        <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <SocialBar shareUrl={shareUrl} title={contentfulBlogPost.title!} />
          <Text>
            {moment(contentfulBlogPost.publishDate).format("MMMM DD, YYYY")}
          </Text>
        </Flex>
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
              return <Text sx={{ my: 1 }}>{children}</Text>
            },
            root: ({ children }) => {
              return <Box sx={{ my: 3 }}>{children}</Box>
            },
          }}
          source={contentfulBlogPost.body!.body!}
        />
      </Layout>
    </>
  )
}

export const query = graphql`
  query BlogPost($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      body {
        body
      }
      description {
        description
      }
      publishDate
      slug
      title
    }
  }
`

export default BlogPostPage
