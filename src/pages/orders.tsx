import { useMutation, useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import { Link } from "gatsby"
import _ from "lodash"
import moment from "moment"
import React, { useContext, useEffect, useState } from "react"
import {
  Box,
  Button,
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

const OrderRow: React.FC<any> = ({ order }) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false)

  return (
    <Box
      sx={{
        borderBottom: "0.5px solid black",
        py: 3,
      }}
    >
      <Flex>
        <Text
          onClick={(): void => {
            setIsDetailsVisible(value => !value)
          }}
          sx={{
            cursor: "pointer",
            flex: 0.3,
          }}
        >
          <Text
            sx={{
              marginTop: !isDetailsVisible ? "-4px" : "4px",
              textAlign: !isDetailsVisible ? "right" : "left",
              transform: !isDetailsVisible ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            ⌃
          </Text>
        </Text>
        <Text sx={{ flex: 1 }}>#{order.node.orderNumber}</Text>
        <Text sx={{ flex: 1 }}>
          {moment(order.node.processedAt).format("MMM DD, YYYY")}
        </Text>
        <Text sx={{ flex: 1 }}>{order.node.lineItems.edges.length}</Text>
        <Text sx={{ flex: 1 }}>
          {parseFloat(order.node.subtotalPriceV2.amount).toFixed(2)}{" "}
          {order.node.subtotalPriceV2.currencyCode}
        </Text>
        <Text sx={{ flex: 1 }}>
          {order.node.financialStatus.toLowerCase()}
          {/* {order.node.fulfillmentStatus} */}
        </Text>
      </Flex>
      {isDetailsVisible && (
        <Box sx={{ py: 2 }}>
          <Flex sx={{ borderBottom: "1px solid #cccccc", py: 2 }}>
            <Text sx={{ flex: 0.3 }}></Text>
            <Text sx={{ color: "#cccccc", flex: 2 }}>Item</Text>
            <Text sx={{ color: "#cccccc", flex: 1 }}>Quantity</Text>
            <Text sx={{ color: "#cccccc", flex: 1 }}>Price</Text>
            <Text sx={{ color: "#cccccc", flex: 1 }}>Amount</Text>
          </Flex>
          {order.node.lineItems.edges.map((lineItem: any) => {
            return (
              <Flex sx={{ py: 2 }}>
                <Text sx={{ flex: 0.3 }}></Text>
                <Text sx={{ flex: 2 }}>
                  {lineItem.node.variant &&
                  lineItem.node.variant.product &&
                  lineItem.node.variant.product.handle ? (
                    <a
                      href={`/products/${lineItem.node.variant.product.handle}`}
                      style={{ color: "#000000 !important" }}
                      target="_blank"
                    >
                      {lineItem.node.title}
                    </a>
                  ) : (
                    <Text>{lineItem.node.title}</Text>
                  )}
                </Text>
                <Text sx={{ flex: 1 }}>{lineItem.node.quantity}</Text>
                <Text sx={{ flex: 1 }}>
                  {parseFloat(lineItem.node.originalTotalPrice.amount).toFixed(
                    2,
                  )}{" "}
                  {lineItem.node.originalTotalPrice.currencyCode}
                </Text>
                <Text sx={{ flex: 1 }}>
                  {(
                    parseFloat(lineItem.node.originalTotalPrice.amount) *
                    lineItem.node.quantity
                  ).toFixed(2)}{" "}
                  {lineItem.node.originalTotalPrice.currencyCode}
                </Text>
              </Flex>
            )
          })}
          <Flex>
            <Text sx={{ flex: 0.3 }}></Text>
            <Text sx={{ flex: 2 }}></Text>
            <Text sx={{ flex: 1 }}></Text>
            <Text sx={{ color: "#cccccc", flex: 1 }}>Shipping</Text>
            <Text sx={{ color: "#cccccc", flex: 1 }}>
              {parseFloat(order.node.totalShippingPriceV2.amount).toFixed(2)}{" "}
              {order.node.totalShippingPriceV2.currencyCode}
            </Text>
          </Flex>
          <Flex>
            <Text sx={{ flex: 0.3 }}></Text>
            <Text sx={{ flex: 2 }}></Text>
            <Text sx={{ flex: 1 }}></Text>
            <Text sx={{ color: "#cccccc", flex: 1 }}>Total</Text>
            <Text sx={{ flex: 1 }}>
              {parseFloat(order.node.subtotalPriceV2.amount).toFixed(2)}{" "}
              {order.node.subtotalPriceV2.currencyCode}
            </Text>
          </Flex>
        </Box>
      )}
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

  useEffect(() => {
    if (!customer) {
      refreshCustomer()
    }
  }, [])

  return (
    <Layout>
      <SEO title="Orders history" />
      <ProductTitle
        items={[
          { active: false, title: "Delivery addresses", url: "/addresses" },
          { active: true, title: "Orders history", url: "/orders" },
          {
            active: false,
            onClick: () => {
              setShopifyAccessToken("")
            },
            title: "Log out",
          },
        ]}
      />
      <Flex sx={{ borderBottom: "0.5px solid black", mt: 3, py: 2 }}>
        <Text sx={{ flex: 0.3 }}></Text>
        <Text sx={{ color: "#cccccc", flex: 1 }}>Order #</Text>
        <Text sx={{ color: "#cccccc", flex: 1 }}>Order date</Text>
        <Text sx={{ color: "#cccccc", flex: 1 }}>Items</Text>
        <Text sx={{ color: "#cccccc", flex: 1 }}>Total amount</Text>
        <Text sx={{ color: "#cccccc", flex: 1 }}>Status</Text>
      </Flex>
      {isCustomerLoading && (
        <Flex sx={{ alignItems: "center", justifyContent: "center", py: 4 }}>
          <Spinner />
        </Flex>
      )}
      {!isCustomerLoading &&
        _.get(customer, "orders.edges", [])
          .reverse()
          .map((order: any) => {
            return <OrderRow order={order} />
          })}
    </Layout>
  )
}

export default OrdersPage
