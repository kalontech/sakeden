import React, { createContext, useEffect, useState } from "react"
// @ts-ignore
import Client from "shopify-buy"
import createPersistedState from "use-persisted-state"

const client = Client.buildClient({
  domain: process.env.SHOPIFY_SHOP_NAME,
  storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
})

const useIsAgeRestrictionVisible = createPersistedState(
  "isAgeRestrictionVisible",
)
const useIsWelcomeVisible = createPersistedState("isWelcomeVisible")

export interface AppContextProps {
  addLineItems: (lineItemsToAdd: any[]) => Promise<void>
  checkout?: Client.Cart
  client: Client.Client
  isAgeRestrictionVisible: boolean
  isCartVisible: boolean
  isCheckoutVisible: boolean
  isMenuVisible: boolean
  isSubscribeVisible: boolean
  isWelcomeVisible: boolean
  setIsAgeRestrictionVisible: React.Dispatch<React.SetStateAction<boolean>>
  setIsCartVisible: React.Dispatch<React.SetStateAction<boolean>>
  setIsCheckoutVisible: React.Dispatch<React.SetStateAction<boolean>>
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>
  setIsSubscribeVisible: React.Dispatch<React.SetStateAction<boolean>>
  setIsWelcomeVisible: React.Dispatch<React.SetStateAction<boolean>>
  setSubscriptionProduct: React.Dispatch<React.SetStateAction<string>>
  subscriptionProduct: string
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
  const [
    isAgeRestrictionVisible,
    setIsAgeRestrictionVisible,
  ] = useIsAgeRestrictionVisible(true)
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [isSubscribeVisible, setIsSubscribeVisible] = useState(false)
  const [isWelcomeVisible, setIsWelcomeVisible] = useIsWelcomeVisible(true)
  const [subscriptionProduct, setSubscriptionProduct] = useState("")

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
        // Use an existing checkout.
        fetchedCheckout = await client.checkout.fetch(existingCheckoutId)
        // Create a new checkout if the order already exists.
        if (fetchedCheckout && fetchedCheckout.order) {
          fetchedCheckout = await client.checkout.create()
        }
      } else {
        // Create a new checkout.
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
        isAgeRestrictionVisible,
        isCartVisible,
        isCheckoutVisible,
        isMenuVisible,
        isSubscribeVisible,
        isWelcomeVisible,
        setIsAgeRestrictionVisible,
        setIsCartVisible,
        setIsCheckoutVisible,
        setIsMenuVisible,
        setIsSubscribeVisible,
        setIsWelcomeVisible,
        setSubscriptionProduct,
        subscriptionProduct,
        updateLineItems,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
