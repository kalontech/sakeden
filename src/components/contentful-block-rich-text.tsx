import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import React from "react"
import { Box } from "theme-ui"

import { ContentfulBlockRichText as ContentfulBlockRichTextProps } from "../../graphql-types"

const ContentfulBlockRichText: React.FC<ContentfulBlockRichTextProps> = ({
  content,
}) => {
  return <Box my={5}>{documentToReactComponents(content?.json)}</Box>
}

export default ContentfulBlockRichText
