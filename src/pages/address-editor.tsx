/* eslint-disable react-hooks/exhaustive-deps */

import { useMutation, useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import { Link, navigate } from "gatsby"
import _ from "lodash"
import moment from "moment"
import React, { useContext, useEffect, useState } from "react"
import { MdEdit } from "react-icons/md"
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  Heading,
  Input,
  Label,
  Text,
} from "theme-ui"
import { useQueryParam, useQueryParams } from "use-query-params"

import AppContext from "../app-context"
import Layout from "../components/layout"
import ProductTitle from "../components/product-title"
import SEO from "../components/seo"
import {
  CUSTOMER_ADDRESS_CREATE,
  CUSTOMER_ADDRESS_UPDATE,
  CUSTOMER_DEFAULT_ADDRESS_UPDATE,
} from "../utils/graphql"

const AddressEditorPage: React.FC = () => {
  const {
    customer,
    shopifyAccessToken,
    refreshCustomer,
    setShopifyAccessToken,
  } = useContext(AppContext)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [company, setCompany] = useState("")
  const [address1, setAddress1] = useState("")
  const [address2, setAddress2] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [zip, setZip] = useState("")
  const [phone, setPhone] = useState("")
  const [makeDefault, setMakeDefault] = useState(false)
  const id = useQueryParam("id")
  const [customerAddressCreate] = useMutation(CUSTOMER_ADDRESS_CREATE)
  const [customerAddressUpdate] = useMutation(CUSTOMER_ADDRESS_UPDATE)
  const [customerDefaultAddressUpdate] = useMutation(
    CUSTOMER_DEFAULT_ADDRESS_UPDATE,
  )
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const currentAddress = _.get(customer, "addresses.edges", []).find(
      (address: any) => {
        return address.node.id === id[0]
      },
    )
    if (currentAddress) {
      setFirstName(`${currentAddress.node.firstName}`)
      setLastName(currentAddress.node.lastName)
      setCompany(currentAddress.node.company)
      setAddress1(currentAddress.node.address1)
      setAddress2(currentAddress.node.address2)
      setCity(currentAddress.node.city)
      setCountry(currentAddress.node.country)
      setZip(currentAddress.node.zip)
      setPhone(currentAddress.node.phone)
    }
  }, [customer])

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
      <Grid columns={2} sx={{ mt: 3, py: 2 }}>
        <Input
          onChange={(e): void => {
            setFirstName(e.target.value)
          }}
          placeholder="First name"
          sx={{
            borderBottomColor: "gray",
            borderBottomStyle: "solid",
            borderBottomWidth: "1px",
          }}
          value={firstName}
          variant="borderless"
        />
        <Input
          onChange={(e): void => {
            setLastName(e.target.value)
          }}
          placeholder="Last name"
          sx={{
            borderBottomColor: "gray",
            borderBottomStyle: "solid",
            borderBottomWidth: "1px",
          }}
          value={lastName}
          variant="borderless"
        />
      </Grid>
      <Grid columns={1} sx={{ py: 2 }}>
        <Input
          onChange={(e): void => {
            setCompany(e.target.value)
          }}
          placeholder="Company"
          sx={{
            borderBottomColor: "gray",
            borderBottomStyle: "solid",
            borderBottomWidth: "1px",
          }}
          value={company}
          variant="borderless"
        />
      </Grid>
      <Grid columns={2} sx={{ py: 2 }}>
        <Input
          onChange={(e): void => {
            setAddress1(e.target.value)
          }}
          placeholder="Address line 1"
          sx={{
            borderBottomColor: "gray",
            borderBottomStyle: "solid",
            borderBottomWidth: "1px",
          }}
          value={address1}
          variant="borderless"
        />
        <Input
          onChange={(e): void => {
            setAddress2(e.target.value)
          }}
          placeholder="Address line 2"
          sx={{
            borderBottomColor: "gray",
            borderBottomStyle: "solid",
            borderBottomWidth: "1px",
          }}
          value={address2}
          variant="borderless"
        />
      </Grid>
      <Grid columns={2} sx={{ py: 2 }}>
        <Input
          onChange={(e): void => {
            setCity(e.target.value)
          }}
          placeholder="City"
          sx={{
            borderBottomColor: "gray",
            borderBottomStyle: "solid",
            borderBottomWidth: "1px",
          }}
          value={city}
          variant="borderless"
        />
        <Input
          onChange={(e): void => {
            setCountry(e.target.value)
          }}
          placeholder="Country"
          sx={{
            borderBottomColor: "gray",
            borderBottomStyle: "solid",
            borderBottomWidth: "1px",
          }}
          value={country}
          variant="borderless"
        />
      </Grid>
      <Grid columns={2} sx={{ py: 2 }}>
        <Input
          onChange={(e): void => {
            setZip(e.target.value)
          }}
          placeholder="Postal/ZIP code"
          sx={{
            borderBottomColor: "gray",
            borderBottomStyle: "solid",
            borderBottomWidth: "1px",
          }}
          value={zip}
          variant="borderless"
        />
        <Input
          onChange={(e): void => {
            setPhone(e.target.value)
          }}
          placeholder="Phone number"
          sx={{
            borderBottomColor: "gray",
            borderBottomStyle: "solid",
            borderBottomWidth: "1px",
          }}
          value={phone}
          variant="borderless"
        />
      </Grid>
      <Grid columns={1} sx={{ py: 2 }}>
        <Flex
          onClick={() => {
            setMakeDefault(value => !value)
          }}
          sx={{cursor: "pointer"}}
        >
          <Checkbox checked={makeDefault} />
          <Text>Set as default address</Text>
        </Flex>
      </Grid>
      <Box sx={{ mt: 4 }}>
        {id && id[0] ? (
          <Button
            onClick={async (): Promise<void> => {
              try {
                setIsLoading(true)
                await customerAddressUpdate({
                  variables: {
                    address: {
                      address1,
                      address2,
                      city,
                      company,
                      country,
                      firstName,
                      lastName,
                      phone,
                      zip,
                    },
                    customerAccessToken: shopifyAccessToken,
                    id: id[0],
                  },
                })
                await refreshCustomer()
                navigate("/addresses")
              } catch (err) {
                throw err
              } finally {
                setIsLoading(false)
              }
            }}
            sx={{ width: "200px" }}
          >
            {isLoading ? "Saving..." : "Save"}
          </Button>
        ) : (
          <Button
            onClick={async (): Promise<void> => {
              try {
                setIsLoading(true)
                await customerAddressCreate({
                  variables: {
                    address: {
                      address1,
                      address2,
                      city,
                      company,
                      country,
                      firstName,
                      lastName,
                      phone,
                      zip,
                    },
                    customerAccessToken: shopifyAccessToken,
                  },
                })
                await refreshCustomer()
                navigate("/addresses")
              } catch (err) {
                throw err
              } finally {
                setIsLoading(false)
              }
            }}
            sx={{ width: "200px" }}
          >
            {isLoading ? "Creating..." : "Create"}
          </Button>
        )}

        <Link to="/addresses">
          <Button sx={{ mt: 3, width: "200px" }} variant="secondary">
            Cancel
          </Button>
        </Link>
      </Box>
    </Layout>
  )
}

export default AddressEditorPage
