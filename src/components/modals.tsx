import "./modals.css"

import React, { useContext } from "react"
import Modal from "react-modal"

import AppContext from "../app-context"
import CartPopup from "./cart-popup"
import CheckoutPopup from "./checkout-popup"
import MenuPopup from "./menu-popup"
import SubscribePopup from "./subscribe-popup"

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
    isCartVisible,
    isCheckoutVisible,
    isMenuVisible,
    isSubscribeVisible,
    setIsCartVisible,
    setIsCheckoutVisible,
    setIsMenuVisible,
    setIsSubscribeVisible,
  } = useContext(AppContext)

  return (
    <>
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
