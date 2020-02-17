import "./modals.css"

import React, { useContext } from "react"
import Modal from "react-modal"

import AppContext from "../app-context"
import CartPopup from "./cart-popup"
import MenuPopup from "./menu-popup"

const modalStyles = {
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
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, .5)",
    display: "flex",
    justifyContent: "center",
    zIndex: 200,
  },
}

const Modals: React.FC = () => {
  const {
    isCartVisible,
    isMenuVisible,
    setIsCartVisible,
    setIsMenuVisible,
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
        style={modalStyles}
      >
        <CartPopup />
      </Modal>
      <Modal
        closeTimeoutMS={100}
        contentLabel="Menu"
        isOpen={isMenuVisible}
        onRequestClose={(): void => {
          setIsMenuVisible(false)
        }}
        style={modalStyles}
      >
        <MenuPopup />
      </Modal>
    </>
  )
}

export default Modals
