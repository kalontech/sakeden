import React from "react"

import { AppContextProvider } from "./src/app-context"

export const wrapRootElement = ({ element }) => {
  return <AppContextProvider>{element}</AppContextProvider>
}
