import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

interface SEOProps {
  description?: string
  lang?: string
  meta?: React.DetailedHTMLProps<
    React.MetaHTMLAttributes<HTMLMetaElement>,
    HTMLMetaElement
  >[]
  title: string
}

const SEO: React.FC<SEOProps> = ({
  description = "",
  lang = "en",
  meta = [],
  title,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          content: metaDescription,
          name: "description",
        },
        {
          content: title,
          property: "og:title",
        },
        {
          content: metaDescription,
          property: "og:description",
        },
        {
          content: "website",
          property: "og:type",
        },
        {
          content: "summary",
          name: "twitter:card",
        },
        {
          content: site.siteMetadata.author,
          name: "twitter:creator",
        },
        {
          content: title,
          name: "twitter:title",
        },
        {
          content: metaDescription,
          name: "twitter:description",
        },
        ...meta,
      ]}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  )
}

export default SEO
