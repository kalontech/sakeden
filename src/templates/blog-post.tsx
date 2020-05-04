import { DiscussionEmbed } from "disqus-react"
import { graphql, ReplaceComponentRendererArgs } from "gatsby"
import Image, { FixedObject } from "gatsby-image"
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
      <SEO
        description={
          contentfulBlogPost.description
            ? contentfulBlogPost.description.description!
            : ""
        }
        image={`https:${contentfulBlogPost.image!.file!.url!}`}
        title={contentfulBlogPost.title!}
      />
      <Layout narrow>
        <Box mb={2}>
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
        <Flex
          sx={{
            alignItems: ["flex-start", "flex-start", "center", "center"],
            flexDirection: ["column", "column", "row", "row"],
            justifyContent: "space-between",
          }}
        >
          <SocialBar shareUrl={shareUrl} title={contentfulBlogPost.title!} />
          <Text>
            {moment(contentfulBlogPost.publishDate).format("MMMM DD, YYYY")}
          </Text>
        </Flex>
        {contentfulBlogPost.body && (
          <Markdown
            renderers={{
              emphasis: ({ children }) => {
                return <em style={{ marginRight: "4px" }}>{children}</em>
              },
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
                      <Image
                        fixed={{ src } as FixedObject}
                        style={{ height: "60vh", width: "100%" }}
                      />
                      <Text sx={{ color: "gray", fontSize: 1, mt: 1 }}>
                        {alt}
                      </Text>
                    </Box>
                  )
                }

                return (
                  <Box sx={{ my: 4 }}>
                    <Box sx={{ display: ["none", "none", "block", "block"] }}>
                      <Parallax
                        bgImage={src}
                        bgImageAlt={alt}
                        strength={100}
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
                    <Text sx={{ color: "gray", fontSize: 1, mt: 1 }}>
                      {alt}
                    </Text>
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
            source={contentfulBlogPost.body.body!}
          />
        )}
        <Box mt={4}>
          <SocialBar shareUrl={shareUrl} title={contentfulBlogPost.title!} />
        </Box>
        <Box mt={4}>
          <DiscussionEmbed
            config={{
              identifier: `sakeology/${contentfulBlogPost.slug!}`,
              title: contentfulBlogPost.title!,
              url: `https://sakeden.com/sakeology/${contentfulBlogPost.slug!}`,
            }}
            shortname={process.env.GATSBY_DISQUS_NAME!}
          />
        </Box>
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
      image {
        file {
          url
        }
      }
      publishDate
      slug
      title
    }
  }
`

export default BlogPostPage
