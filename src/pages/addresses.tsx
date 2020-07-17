import { useMutation, useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import { Link } from "gatsby"
import _ from "lodash"
import moment from "moment"
import React, { useContext, useEffect, useState } from "react"
import { MdEdit } from "react-icons/md"
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Input,
  Label,
  Text,
  Spinner,
} from "theme-ui"

import AppContext from "../app-context"
import Layout from "../components/layout"
import ProductTitle from "../components/product-title"
import SEO from "../components/seo"
import { CUSTOMER_DEFAULT_ADDRESS_UPDATE } from "../utils/graphql"

const AddressRow: React.FC<any> = ({ address, isDefault, onSetDefault }) => {
  const [isForceDefault, setIsForceDefault] = useState(false)

  useEffect(() => {
    setIsForceDefault(false)
  }, [address])

  return (
    <Box
      sx={{
        borderBottom: "0.5px solid black",
        py: 3,
      }}
    >
      <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Flex sx={{ alignItems: "center" }}>
          <Box
            onClick={(): void => {
              onSetDefault()
              setIsForceDefault(true)
            }}
            sx={{ cursor: "pointer" }}
          >
            <Checkbox checked={isForceDefault || isDefault} />
          </Box>
          <Heading as="h4" variant="h4">
            {address.node.formatted[0]}
          </Heading>
          {isDefault && (
            <Text sx={{ color: "gray", ml: 2 }}>Default address</Text>
          )}
        </Flex>
        <Link to={`/address-editor?id=${address.node.id}`}>
          <Button onClick={(): void => {}} variant="iconInverted">
            <MdEdit />
          </Button>
        </Link>
      </Flex>
      {address.node.formatted.map((line: any, index: number) => {
        if (index === 0) {
          return null
        }
        return <Text>{line}</Text>
      })}
    </Box>
  )
}

const OrdersPage: React.FC = () => {
  const {
    customer,
    shopifyAccessToken,
    isCustomerLoading,
    refreshCustomer,
    setShopifyAccessToken,
  } = useContext(AppContext)
  const [customerDefaultAddressUpdate] = useMutation(
    CUSTOMER_DEFAULT_ADDRESS_UPDATE,
  )

  useEffect(() => {
    if (!customer) {
      refreshCustomer()
    }
  }, [])

  return (
    <Layout>
      <SEO title="Delivery addresses" />
      <ProductTitle
        items={[
          { active: true, title: "Delivery addresses", url: "/addresses" },
          { active: false, title: "Orders history", url: "/orders" },
          {
            active: false,
            onClick: () => {
              setShopifyAccessToken("")
            },
            title: "Log out",
          },
        ]}
      />
      <Box sx={{ mt: 3 }}>
        {isCustomerLoading && (
          <Flex sx={{ alignItems: "center", justifyContent: "center", py: 4 }}>
            <Spinner />
          </Flex>
        )}
        {!isCustomerLoading &&
          _.get(customer, "addresses.edges", []).map((address: any) => {
            return (
              <AddressRow
                address={address}
                isDefault={
                  _.get(customer, "defaultAddress.id") === address.node.id
                }
                key={address.node.id}
                onSetDefault={async (): Promise<void> => {
                  await customerDefaultAddressUpdate({
                    fetchPolicy: "no-cache",
                    variables: {
                      addressId: address.node.id,
                      customerAccessToken: shopifyAccessToken,
                    },
                  })
                  await refreshCustomer()
                }}
              />
            )
          })}
        <Link to="/address-editor">
          <Button sx={{ mt: 4 }}>Add address</Button>
        </Link>
      </Box>
    </Layout>
  )
}

export default OrdersPage
