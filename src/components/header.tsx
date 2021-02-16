import { graphql, navigate, useStaticQuery } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import React, { useContext, useState } from "react"
import { MdClose, MdMenu, MdSearch, MdShoppingCart } from "react-icons/md"
import Select from "react-select"
import { useScrollYPosition } from "react-use-scroll-position"
import { Box, Button, Container, Flex, Text } from "theme-ui"

import { ProductsPageQuery } from "../../graphql-types"
import AppContext from "../app-context"
import { InternalLink } from "./link"

interface HeaderProps {
  logo?: React.ReactNode
}

interface IOption {
  label: string
  value: string
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const { checkout, setIsCartVisible, setIsMenuVisible } = useContext(
    AppContext,
  )
  const scrollY = useScrollYPosition()
  const [searchVisible, setSearchVisible] = useState(false)

  const isSticky = scrollY > 0

  const { allShopifyProduct } = useStaticQuery<ProductsPageQuery>(
    graphql`
      query HeaderAllProducts {
        allShopifyProduct(filter: { title: { regex: "/^((?!Sub).)*$/" } }) {
          edges {
            node {
              availableForSale
              description
              handle
              images {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
                originalSrc
              }
              metafields {
                key
                value
              }
              shopifyId
              tags
              title
              variants {
                shopifyId
                title
                priceV2 {
                  amount
                  currencyCode
                }
              }
              vendor
            }
          }
        }
      }
    `,
  )

  const options = allShopifyProduct.edges
    .filter(
      node =>
        node &&
        node.node &&
        node.node.title &&
        node.node.title !== "Gift packaging",
    )
    .map(node => ({
      label: node.node.title,
      pic:
        node.node.images &&
        node.node.images.length > 0 &&
        node.node.images[0]?.localFile!.childImageSharp!.fluid,
      value: node.node.handle,
    }))

  const customStyles = {
    control: (styles: any) => ({
      ...styles,
      border: "0 !important",
      boxShadow: "none",
      textColor: "black",
      width: 300,
    }),
    dropdownIndicator: (styles: any) => ({
      ...styles,
      color: "black",
    }),
    indicatorSeparator: (styles: any) => ({
      ...styles,
      backgroundColor: "black",
      borderColor: "black",
      color: "black",
    }),
    option: (provided: any, state: { isFocused: any }) => ({
      ...provided,
      backgroundColor: state.isFocused ? "black" : "white",
      color: state.isFocused ? "white" : "black",
    }),
    placeholder: (styles: any) => ({
      ...styles,
      color: "black",
    }),
  }

  const formatOptionLabel = ({ value, label, pic }: any) => (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "10px" }}>
        <Image
          style={{
            height: "30px",
            width: "20px",
          }}
          fluid={pic as FluidObject}
        />
      </div>
      <div>{label}</div>
    </div>
  )

  return (
    <Box pt="100px">
      <Box
        bg="secondary"
        sx={{
          border: "1px solid #eee",
          boxShadow: isSticky ? "0px 3px 5px 1px rgba(0, 0, 0, 0.1)" : "none",
          left: 0,
          position: "fixed",
          right: 0,
          top: 0,
          transition: "100ms ease-in-out",
          zIndex: 100,
        }}
      >
        <Container>
          <Flex
            sx={{
              alignItems: "center",
              height: isSticky ? "70px" : "100px",
              justifyContent: "space-between",
              transition: "100ms ease-in-out",
            }}
          >
            <Box
              sx={{
                display: [
                  searchVisible ? "none" : "block",
                  searchVisible ? "none" : "block",
                  "block",
                  "block",
                ],
              }}
            >
              <InternalLink href="/">{logo}</InternalLink>
            </Box>
            <Flex>
              <Box
                sx={{
                  width: [
                    searchVisible ? "100vw" : 30,
                    searchVisible ? "100vw" : 30,
                    320,
                    320,
                  ],
                }}
              >
                {!searchVisible && (
                  <Flex
                    sx={{
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button
                      onClick={(): void => {
                        setSearchVisible(true)
                      }}
                      variant="iconInverted"
                    >
                      <MdSearch />
                    </Button>
                  </Flex>
                )}
                {searchVisible && (
                  <Flex
                    sx={{
                      alignItems: "center",
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <Select
                      placeholder="Search..."
                      styles={customStyles}
                      onChange={e =>
                        e && navigate(`/products/${(e as IOption).value}`)
                      }
                      formatOptionLabel={formatOptionLabel}
                      options={options}
                    />
                    <Button
                      onClick={(): void => {
                        setSearchVisible(false)
                      }}
                      variant="iconInverted"
                    >
                      <MdClose />
                    </Button>
                  </Flex>
                )}
              </Box>
              <Box
                sx={{
                  display: [
                    searchVisible ? "none" : "block",
                    searchVisible ? "none" : "block",
                    "block",
                    "block",
                  ],
                }}
              >
                <Button
                  onClick={(): void => {
                    setIsCartVisible(true)
                  }}
                  variant="iconInverted"
                >
                  <MdShoppingCart />
                  <Text
                    sx={{
                      bottom: "-2px",
                      fontSize: "14px",
                      position: "absolute",
                      right: "2px",
                    }}
                  >
                    {checkout && checkout.lineItems
                      ? checkout.lineItems.length
                      : 0}
                  </Text>
                </Button>
              </Box>
              <Box
                sx={{
                  display: [
                    searchVisible ? "none" : "block",
                    searchVisible ? "none" : "block",
                    "block",
                    "block",
                  ],
                }}
              >
                <Button
                  onClick={(): void => {
                    setIsMenuVisible(true)
                  }}
                  variant="iconInverted"
                >
                  <MdMenu />
                </Button>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

export default Header
