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
    <Flex>
      {items.map(item => {
        return (
          <InternalLink href={item.url}>
            <Heading
              as="h2"
              sx={{
                ...(item.active
                  ? { textDecoration: "underline" }
                  : { opacity: 0.5 }),
                mr: 3,
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
