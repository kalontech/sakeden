import React, { createContext, useEffect, useState } from "react"
// @ts-ignore
import Client from "shopify-buy"

const client = Client.buildClient({
  domain: process.env.SHOPIFY_SHOP_NAME || "sakaguranow.myshopify.com",
  storefrontAccessToken:
    process.env.SHOPIFY_ACCESS_TOKEN || "7a20e560f4c2abc01efca665556207c6",
})

export interface AppContextProps {
  addLineItems: (lineItemsToAdd: any[]) => Promise<void>
  checkout?: Client.Cart
  client: Client.Client
  isCartVisible: boolean
  isMenuVisible: boolean
  setIsCartVisible: React.Dispatch<React.SetStateAction<boolean>>
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>
  updateLineItems: (lineItemsToUpdate: any[]) => Promise<void>
}

const AppContext = createContext({} as AppContextProps)

export interface AppContextProviderProps {
  children: React.ReactNode
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [checkout, setCheckout] = useState<Client.Cart | undefined>(undefined)
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  useEffect(() => {
    fetchCheckout()
  }, [])

  const addLineItems = async (lineItemsToAdd: any[]): Promise<void> => {
    if (checkout) {
      const newCheckout = await client.checkout.addLineItems(
        checkout.id,
        lineItemsToAdd,
      )
      setCheckout(newCheckout)
    }
  }

  const updateLineItems = async (lineItemsToUpdate: any[]): Promise<void> => {
    if (checkout) {
      const newCheckout = await client.checkout.updateLineItems(
        checkout.id,
        lineItemsToUpdate,
      )
      setCheckout(newCheckout)
    }
  }

  const fetchCheckout = async (): Promise<void> => {
    const existingCheckoutId = localStorage.getItem("shopify_checkout_id")
    let fetchedCheckout

    try {
      if (existingCheckoutId) {
        fetchedCheckout = await client.checkout.fetch(existingCheckoutId)
      } else {
        fetchedCheckout = await client.checkout.create()
      }
    } finally {
      if (fetchedCheckout) {
        localStorage.setItem(
          "shopify_checkout_id",
          fetchedCheckout.id.toString(),
        )
      } else {
        localStorage.removeItem("shopify_checkout_id")
      }

      setCheckout(fetchedCheckout)
    }
  }

  return (
    <AppContext.Provider
      value={{
        addLineItems,
        checkout,
        client,
        isCartVisible,
        isMenuVisible,
        setIsCartVisible,
        setIsMenuVisible,
        updateLineItems,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
