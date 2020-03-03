import { graphql, ReplaceComponentRendererArgs } from "gatsby"
import Image, { FixedObject } from "gatsby-image"
import moment from "moment"
import React from "react"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import Markdown from "react-markdown"
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share"
import { Box, Flex, Heading, Text } from "theme-ui"

import { BlogPostQuery, ContentfulBlogPost } from "../../graphql-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostPage: React.FC<ReplaceComponentRendererArgs["props"]> = props => {
  const data = props.data as BlogPostQuery
  const contentfulBlogPost = data.contentfulBlogPost as ContentfulBlogPost

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  return (
    <>
      <SEO title={contentfulBlogPost.title!} />
      <Layout narrow>
        <Heading as="h1" variant="h1">
          {contentfulBlogPost.title}
        </Heading>
        <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Flex>
            <EmailShareButton title={contentfulBlogPost.title!} url={shareUrl}>
              <MdEmail size="28px" />
            </EmailShareButton>
            <FacebookShareButton
              title={contentfulBlogPost.title!}
              url={shareUrl}
            >
              <FaFacebookSquare size="28px" />
            </FacebookShareButton>
            <TwitterShareButton
              title={contentfulBlogPost.title!}
              url={shareUrl}
            >
              <FaTwitterSquare size="28px" />
            </TwitterShareButton>
            <WhatsappShareButton
              title={contentfulBlogPost.title!}
              url={shareUrl}
            >
              <FaWhatsappSquare size="28px" />
            </WhatsappShareButton>
          </Flex>
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
