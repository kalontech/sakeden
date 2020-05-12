import React from "react"
import { Flex } from "theme-ui"
import { useQueryParam } from "use-query-params"

const GiftCard: React.FC = () => {
  const [wish] = useQueryParam("wish")

  return (
    <Flex
      sx={{ alignItems: "center", height: "100vh", justifyContent: "center" }}
    >
      {wish as string}
    </Flex>
  )
}

export default GiftCard
