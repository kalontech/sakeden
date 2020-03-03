import React from "react"
import { Flex } from "theme-ui"

interface CardProps {
  children: React.ReactNode
}
const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <Flex
      bg="muted"
      p={3}
      sx={{
        ":hover": {
          boxShadow: "0px 3px 5px 3px rgba(0, 0, 0, 0.1)",
        },
        boxShadow: "0px 3px 5px 1px rgba(0, 0, 0, 0.05)",
        flexDirection: "column",
        height: "100%",
        transition: "200ms ease-in-out",
      }}
    >
      {children}
    </Flex>
  )
}

export default Card
