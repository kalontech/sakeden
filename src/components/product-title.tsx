import React from "react"
import { Flex, Heading } from "theme-ui"

import { InternalLink } from "./link"

interface ProductTitleProps {
  items: {
    active: boolean
    title: string
    url: string
  }[]
}

const ProductTitle: React.FC<ProductTitleProps> = ({ items }) => {
  return (
    <Flex sx={{ flexDirection: ["column", "column", "row", "row"] }}>
      {items.map(item => {
        return (
          <InternalLink href={item.url}>
            <Heading
              as="h2"
              sx={{
                ...(item.active ? {} : { opacity: 0.5 }),
                mb: [2, 2, 0, 0],
                mr: [0, 0, 4, 4],
                textTransform: "uppercase",
              }}
              variant="h2"
            >
              {item.title}
            </Heading>
          </InternalLink>
        )
      })}
    </Flex>
  )
}

export default ProductTitle
