import React from "react"

import {
  ContentfulBlockFeaturedBlogPosts as ContentfulBlockFeaturedBlogPostsProps,
  ContentfulBlockFeaturedProducts as ContentfulBlockFeaturedProductsProps,
  ContentfulBlockHero as ContentfulBlockHeroProps,
} from "../../graphql-types"
import ContentfulBlockFeaturedBlogPosts from "../components/contentful-block-featured-blog-posts"
import ContentfulBlockFeaturedProducts from "../components/contentful-block-featured-products"
import ContentfulBlockHero from "../components/contentful-block-hero"

export interface Block
  extends ContentfulBlockFeaturedBlogPostsProps,
    ContentfulBlockFeaturedProductsProps,
    ContentfulBlockHeroProps {
  __typename: string
}

export const renderContentfulBlock = ({
  __typename,
  ...props
}: Block): React.ReactNode => {
  switch (__typename) {
    case "ContentfulBlockFeaturedBlogPosts":
      return <ContentfulBlockFeaturedBlogPosts {...props} />
    case "ContentfulBlockFeaturedProducts":
      return <ContentfulBlockFeaturedProducts {...props} />
    case "ContentfulBlockHero":
      return <ContentfulBlockHero {...props} />
    default:
      return <h1>Cannot load block {`<${__typename} />`}</h1>
  }
}
