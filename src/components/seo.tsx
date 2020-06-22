import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

import { ShopifyProduct } from "../../graphql-types"

interface SEOProps {
  description?: string
  image?: string
  lang?: string
  meta?: React.DetailedHTMLProps<
    React.MetaHTMLAttributes<HTMLMetaElement>,
    HTMLMetaElement
  >[]
  product?: ShopifyProduct
  title: string
  withoutTitleSuffix?: boolean
}

const SEO: React.FC<SEOProps> = ({
  description = "Dedicated to discovering and delivering small-batch, hand crafted artisan sake direct to you from breweries in Japan. Kampai! #SAKEDEN #Sakeology",
  image,
  lang = "en",
  meta = [],
  product,
  title = "SAKEDEN",
  withoutTitleSuffix,
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

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        // General.
        {
          content: title,
          name: "og:title",
        },
        {
          content: title,
          name: "twitter:title",
        },
        {
          content: description || site.siteMetadata.description,
          name: "description",
        },
        {
          content: description || site.siteMetadata.description,
          name: "twitter:description",
        },
        {
          content: description || site.siteMetadata.description,
          name: "og:description",
        },

        // Twitter.
        {
          content: "summary",
          name: "twitter:card",
        },

        // OG.
        {
          content: image,
          name: "og:image",
        },
        {
          content: product ? "product" : "page",
          property: "og:type",
        },
        // TODO fix this, since it doesn't work with FB and it breaks the image for sharing

        // {
        //   content: typeof window !== "undefined" ? window.location.href : "",
        //   name: "og:url",
        // },

        // Product.
        ...(product
          ? [
              {
                content: product.vendor,
                name: "product:brand",
              },
              {
                content: product.availableForSale ? "in stock" : "sold out",
                name: "product:availability",
              },
              {
                content: "new",
                name: "product:condition",
              },
              {
                content: product.variants![0]!.priceV2!.amount,
                name: "product:price:amount",
              },
              {
                content: product.variants![0]!.priceV2!.currencyCode,
                name: "product:price:currency",
              },
              {
                content: product.handle,
                name: "product:retailer_item_id",
              },
              ...(product.tags!.includes("Bottles")
                ? [
                    {
                      content: "bottles",
                      name: "product:item_group_id",
                    },
                  ]
                : []),
              ...(product.tags!.includes("Sets")
                ? [
                    {
                      content: "sets",
                      name: "product:item_group_id",
                    },
                  ]
                : []),
            ]
          : []),

        ...meta,
      ]}
      title={title}
      titleTemplate={
        withoutTitleSuffix ? `%s` : `%s | ${site.siteMetadata.title}`
      }
    />
  )
}

export default SEO
