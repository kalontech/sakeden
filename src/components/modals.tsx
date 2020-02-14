import "./modals.css"

import React, { useContext } from "react"
import Modal from "react-modal"

import AppContext from "../app-context"
import CartPopup from "./cart-popup"
import MenuPopup from "./menu-popup"

const modalStyles = {
  content: {
    alignItems: "center",
    backgroundColor: "transparent",
    border: "none",
    borderRadius: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    left: 0,
    padding: 0,
    right: 0,
    top: 0,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, .5)",
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
        isOpen={isCartVisible}
        onRequestClose={(): void => {
          setIsCartVisible(false)
        }}
        style={modalStyles}
        contentLabel="Cart"
      >
        <CartPopup />
      </Modal>
      <Modal
        closeTimeoutMS={100}
        isOpen={isMenuVisible}
        onRequestClose={(): void => {
          setIsMenuVisible(false)
        }}
        style={modalStyles}
        contentLabel="Menu"
      >
        <MenuPopup />
      </Modal>
    </>
  )
}

export default Modals
