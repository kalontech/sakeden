import { gql } from "apollo-boost"

export const CUSTOMER = gql`
  query customer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      addresses(first: 250) {
        edges {
          node {
            address1
            address2
            city
            company
            country
            countryCode
            countryCodeV2
            firstName
            formatted
            formattedArea
            id
            lastName
            latitude
            longitude
            name
            phone
            province
            provinceCode
            zip
          }
        }
      }
      defaultAddress {
        id
      }
      orders(first: 250) {
        edges {
          node {
            financialStatus
            fulfillmentStatus
            lineItems(first: 250) {
              edges {
                node {
                  discountedTotalPrice {
                    amount
                    currencyCode
                  }
                  originalTotalPrice {
                    amount
                    currencyCode
                  }
                  title
                  variant {
                    product {
                      handle
                    }
                  }
                  quantity
                }
              }
            }
            orderNumber
            processedAt
            subtotalPriceV2 {
              amount
              currencyCode
            }
            totalShippingPriceV2 {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`

export const CUSTOMER_ADDRESS_CREATE = gql`
  mutation customerAddressCreate(
    $customerAccessToken: String!
    $address: MailingAddressInput!
  ) {
    customerAddressCreate(
      customerAccessToken: $customerAccessToken
      address: $address
    ) {
      customerAddress {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`

export const CUSTOMER_ADDRESS_UPDATE = gql`
  mutation customerAddressUpdate(
    $customerAccessToken: String!
    $id: ID!
    $address: MailingAddressInput!
  ) {
    customerAddressUpdate(
      customerAccessToken: $customerAccessToken
      id: $id
      address: $address
    ) {
      customerAddress {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`

export const CUSTOMER_DEFAULT_ADDRESS_UPDATE = gql`
  mutation customerDefaultAddressUpdate(
    $customerAccessToken: String!
    $addressId: ID!
  ) {
    customerDefaultAddressUpdate(
      customerAccessToken: $customerAccessToken
      addressId: $addressId
    ) {
      customer {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`

export const CUSTOMER_CREATE = gql`
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`

export const CUSTOMER_ACCESS_TOKEN_CREATE = gql`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`
