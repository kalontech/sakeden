import { ApolloProvider } from "@apollo/react-hooks"
import React from "react"

import { AppContextProvider } from "./src/app-context"
import client from "./src/client"

export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      <AppContextProvider>{element}</AppContextProvider>
    </ApolloProvider>
  )
}
