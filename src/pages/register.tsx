import { useMutation, useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import _ from "lodash"
import React, { useContext, useEffect, useState } from "react"
import { Box, Button, Input, Label, Text, Flex, Heading } from "theme-ui"

import AppContext from "../app-context"
import Layout from "../components/layout"
import { Link, navigate, useStaticQuery, graphql } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import { CUSTOMER_CREATE, CUSTOMER_ACCESS_TOKEN_CREATE } from "../utils/graphql"

const RegisterPage: React.FC = () => {
  const { setShopifyAccessToken, shopifyAccessToken } = useContext(AppContext)
  const [customerCreate, { data: registerData, loading: registerLoading }] = useMutation(CUSTOMER_CREATE)
  const [customerAccessTokenCreate, { data: loginData, loading: loginLoading }] = useMutation(
    CUSTOMER_ACCESS_TOKEN_CREATE,
  )
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { file: registerBgImage } = useStaticQuery<any>(graphql`
    query RegisterBgImage {
      file(relativePath: { eq: "register-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  useEffect(() => {
    if (shopifyAccessToken) {
      navigate("/orders")
    }
  }, [shopifyAccessToken])

  useEffect(() => {
    const accessToken = _.get(
      loginData,
      "customerAccessTokenCreate.customerAccessToken.accessToken",
    )
    if (accessToken) {
      setShopifyAccessToken(accessToken)
    }
  }, [loginData])

  const errorCode = _.get(registerData, "customerCreate.customerUserErrors.0.code")
  const errorMessage = _.get(registerData, "customerCreate.customerUserErrors.0.message")

  return (
    <Layout showBanner={false}>
      <Flex sx={{ height: "100%" }}>
        <Flex
          sx={{
            flex: [1, 1, 0.5, 0.5],
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
            pr: [0, 0, 4, 5],
          }}
        >
          <Heading as="h1" sx={{ mb: 5 }} variant="h2">
            Register
          </Heading>
          <Box>
            <Label>Email</Label>
            <Input
              onChange={(e): void => {
                setEmail(e.target.value)
              }}
              type="email"
              value={email}
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <Label>Password</Label>
            <Input
              onChange={(e): void => {
                setPassword(e.target.value)
              }}
              type="password"
              value={password}
            />
          </Box>
          <Text sx={{ color: "danger", mt: 2 }}>
            {errorCode === "UNIDENTIFIED_CUSTOMER" ? (
              <span>User with this email or password does not exist.</span>
            ) : (
              <span>{errorMessage}</span>
            )}
          </Text>
          <Box sx={{ mt: 4 }}>
            <Button
              onClick={async (): Promise<void> => {
                if (email && password) {
                  await customerCreate({
                    variables: {
                      input: { email, password },
                    },
                  })
                  await customerAccessTokenCreate({
                    variables: {
                      input: { email, password },
                    },
                  })
                }
              }}
            >
              {registerLoading || loginLoading ? "Registering..." : "Register"}
            </Button>
          </Box>
          <Text sx={{ mt: 3 }}>
            Already registered? <Link to="/login">Login</Link>
          </Text>
        </Flex>
        <Box
          sx={{
            bottom: 0,
            display: ["none", "none", "block", "block"],
            flex: [0, 0, 0.5, 0.5],
            left: "50%",
            position: "absolute",
            right: 0,
            top: "100px",
          }}
        >
          {registerBgImage && (
            <Image
              fluid={registerBgImage.childImageSharp!.fluid! as FluidObject}
              imgStyle={{ objectFit: "cover" }}
              style={{ height: "100%", width: "100%" }}
            />
          )}
        </Box>
      </Flex>
    </Layout>
  )
}

export default RegisterPage
