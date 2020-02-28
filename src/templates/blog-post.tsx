import { graphql, ReplaceComponentRendererArgs } from "gatsby"
import Image, { FixedObject, FluidObject } from "gatsby-image"
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
import { Box, Flex, Heading, Styled, Text } from "theme-ui"

import { ContentfulBlogPost } from "../../graphql-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostPage: React.FC<ReplaceComponentRendererArgs["props"]> = props => {
  const pageResources = props.pageResources as any
  const contentfulBlogPost = pageResources.json.data
    .contentfulBlogPost as ContentfulBlogPost

  return (
    <>
      <SEO title={contentfulBlogPost.title!} />
      <Layout narrow>
        <Heading as="h1" variant="h1">
          {contentfulBlogPost.title}
        </Heading>
        <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Flex>
            <EmailShareButton
              title={contentfulBlogPost.title!}
              url={window.location.href}
            >
              <MdEmail size="28px" />
            </EmailShareButton>
            <FacebookShareButton
              title={contentfulBlogPost.title!}
              url={window.location.href}
            >
              <FaFacebookSquare size="28px" />
            </FacebookShareButton>
            <TwitterShareButton
              title={contentfulBlogPost.title!}
              url={window.location.href}
            >
              <FaTwitterSquare size="28px" />
            </TwitterShareButton>
            <WhatsappShareButton
              title={contentfulBlogPost.title!}
              url={window.location.href}
            >
              <FaWhatsappSquare size="28px" />
            </WhatsappShareButton>
          </Flex>
          <Text>
            {moment(contentfulBlogPost.publishDate).format("MMMM DD, YYYY")}
          </Text>
        </Flex>
        {/* {contentfulBlogPost.heroImage && (
          <Box sx={{ my: 3 }}>
            <Image
              fluid={contentfulBlogPost.heroImage.fluid as FluidObject}
              style={{ height: "500px" }}
            />
          </Box>
        )} */}
        <Styled.root>
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
            source={contentfulBlogPost.body!.body!}
          />
        </Styled.root>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
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
