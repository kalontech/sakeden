import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

interface SEOProps {
  description?: string
  image?: string
  lang?: string
  meta?: React.DetailedHTMLProps<
    React.MetaHTMLAttributes<HTMLMetaElement>,
    HTMLMetaElement
  >[]
  title: string
}

const SEO: React.FC<SEOProps> = ({
  description = "Dedicated to discovering and delivering small-batch, hand crafted artisan sake direct to you from breweries in Japan. Kampai! #SAKEDEN #Sakeology",
  image,
  lang = "en",
  meta = [],
  title = "Sakeden Collection",
}) => {
  const { shopifyProduct, site } = useStaticQuery(
    graphql`
      query {
        shopifyProduct(handle: { eq: "fragrant-sake-set" }) {
          images {
            originalSrc
          }
        }
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

  if (!image) {
    image = shopifyProduct.images[0].originalSrc
  }

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
          content: "article",
          property: "og:type",
        },
        {
          content: image,
          name: "og:image",
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
