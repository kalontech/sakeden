import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

export default new ApolloClient({
  fetch,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Shopify-Storefront-Access-Token": "7a20e560f4c2abc01efca665556207c6",
  },
  uri: "https://sakaguranow.myshopify.com/api/2020-04/graphql.json",
})
