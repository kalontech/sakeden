import "./modals.css"

import React, { useContext, useEffect, useState } from "react"
import Modal from "react-modal"

import AppContext from "../app-context"
import AgeRestrictionPopup from "./age-restriction-popup"
import CartPopup from "./cart-popup"
import CheckoutPopup from "./checkout-popup"
import MenuPopup from "./menu-popup"
import SubscribePopup from "./subscribe-popup"
import WelcomePopup from "./welcome-popup"

const getModalStyles = (x = "center", y = "center"): Modal.Styles => {
  return {
    content: {
      backgroundColor: "transparent",
      border: "none",
      borderRadius: 0,
      bottom: "unset",
      left: "unset",
      maxHeight: "100vh",
      padding: 0,
      right: "unset",
      top: "unset",
    },
    overlay: {
      alignItems: y,
      backgroundColor: "rgba(0, 0, 0, .5)",
      display: "flex",
      justifyContent: x,
      zIndex: 200,
    },
  }
}

const Modals: React.FC = () => {
  const {
    isAgeRestrictionVisible,
    isCartVisible,
    isCheckoutVisible,
    isMenuVisible,
    isSubscribeVisible,
    isWelcomeVisible,
    setIsCartVisible,
    setIsCheckoutVisible,
    setIsMenuVisible,
    setIsSubscribeVisible,
    setIsWelcomeVisible,
  } = useContext(AppContext)
  const [isMountDelayedNodes, setIsMountDelayedNodes] = useState(false)

  useEffect(() => {
    if (!isAgeRestrictionVisible) {
      setTimeout(() => {
        setIsMountDelayedNodes(true)
      }, 5000)
    }
  }, [isAgeRestrictionVisible])

  return (
    <>
      {isMountDelayedNodes && (
        <Modal
          closeTimeoutMS={100}
          contentLabel="Welcome"
          isOpen={isWelcomeVisible}
          onRequestClose={(): void => {
            setIsWelcomeVisible(false)
          }}
          style={getModalStyles("center", "center")}
        >
          <WelcomePopup />
        </Modal>
      )}
      <Modal
        closeTimeoutMS={100}
        contentLabel="Age restriction"
        isOpen={isAgeRestrictionVisible}
        style={getModalStyles("center", "center")}
      >
        <AgeRestrictionPopup />
      </Modal>
      <Modal
        closeTimeoutMS={100}
        contentLabel="Cart"
        isOpen={isCartVisible}
        onRequestClose={(): void => {
          setIsCartVisible(false)
        }}
        style={getModalStyles("center", "center")}
      >
        <CartPopup />
      </Modal>
      <Modal
        closeTimeoutMS={100}
        contentLabel="Checkout"
        isOpen={isCheckoutVisible}
        onRequestClose={(): void => {
          setIsCheckoutVisible(false)
        }}
        style={getModalStyles("center", "center")}
      >
        <CheckoutPopup />
      </Modal>
      <Modal
        closeTimeoutMS={100}
        contentLabel="Menu"
        isOpen={isMenuVisible}
        onRequestClose={(): void => {
          setIsMenuVisible(false)
        }}
        style={getModalStyles("flex-end", "center")}
      >
        <MenuPopup />
      </Modal>
      <Modal
        closeTimeoutMS={100}
        contentLabel="Subscribe"
        isOpen={isSubscribeVisible}
        onRequestClose={(): void => {
          setIsSubscribeVisible(false)
        }}
        style={getModalStyles("center", "center")}
      >
        <SubscribePopup />
      </Modal>
    </>
  )
}

export default Modals
