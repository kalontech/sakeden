import { graphql, ReplaceComponentRendererArgs } from "gatsby"
import React from "react"

import { ContentfulPage, PageQuery } from "../../graphql-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Block, renderContentfulBlock } from "../utils/contentful"

const PagePage: React.FC<ReplaceComponentRendererArgs["props"]> = props => {
  const data = props.data as PageQuery
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const contentfulPage = data.contentfulPage as ContentfulPage
  const blocks = (contentfulPage.blocks || []) as Block[]

  return (
    <>
      <SEO title={contentfulPage.title!} />
      <Layout>{blocks.map(renderContentfulBlock)}</Layout>
    </>
  )
}

export const query = graphql`
  query Page($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      blocks {
        ... on ContentfulBlockFeaturedBlogPosts {
          blogPosts {
            createdAt
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
            slug
            title
          }
          id
          title
        }
        ... on ContentfulBlockFeaturedProducts {
          id
          products
          title
        }
        ... on ContentfulBlockForm {
          contentfulfields
          description {
            description
          }
          extraDescription {
            extraDescription
          }
          extraTitle
          sendToMailchimp
          sendToNetlifyForms
          successDescription {
            successDescription
          }
          successTitle
          title
        }
        ... on ContentfulBlockHero {
          id
          picture {
            resize(width: 1920) {
              src
            }
          }
          pictureText {
            pictureText
          }
          title
        }
      }
      slug
      title
    }
  }
`

export default PagePage
