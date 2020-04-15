import { graphql, ReplaceComponentRendererArgs } from "gatsby"
import moment from "moment"
import React from "react"
import Markdown from "react-markdown"
import { Parallax } from "react-parallax"
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
            html: ({ value }) => {
              return (
                <div
                  dangerouslySetInnerHTML={{ __html: value }}
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    margin: "16px 0",
                  }}
                />
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
                  <Box sx={{ display: ["none", "none", "block", "block"] }}>
                    <Parallax
                      bgImage={src}
                      bgImageAlt={alt}
                      strength={200}
                      style={{
                        margin: "0 auto",
                        width: src.endsWith("#half-width") ? "50%" : "100%",
                      }}
                    >
                      <div style={{ height: "80vh" }} />
                    </Parallax>
                  </Box>
                  <Box sx={{ display: ["block", "block", "none", "none"] }}>
                    <Parallax
                      bgImage={src}
                      bgImageAlt={alt}
                      strength={200}
                      style={{
                        width: "100%",
                      }}
                    >
                      <div style={{ height: "80vh" }} />
                    </Parallax>
                  </Box>
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
        <Flex mt={4}>
          <Heading
            as="h4"
            variant="h4"
            sx={{ alignItems: "center", lineHeight: 1.5, mr: 3, mt: "2px" }}
          >
            Share this
          </Heading>
          <SocialBar shareUrl={shareUrl} title={contentfulBlogPost.title!} />
        </Flex>
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
