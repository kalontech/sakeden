/* eslint-disable sort-keys */

const heading = {
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
}

const button = {
  ":hover": {
    opacity: "0.8",
  },
  alignItems: "center",
  borderRadius: 0,
  cursor: "pointer",
  display: "flex",
  fontFamily: "heading",
  height: "60px",
  justifyContent: "center",
  outline: "none",
  transition: "200ms ease-in-out",
}

const theme = {
  buttons: {
    primary: {
      ...button,
      bg: "primary",
    },
    secondary: {
      ...button,
      bg: "secondary",
      borderColor: "primary",
      borderStyle: "solid",
      borderWidth: "2px",
      color: "primary",
    },
    icon: {
      ...button,
      bg: "primary",
      fontSize: "28px",
      height: "40px",
      padding: "0px",
      width: "40px",
    },
    iconBordered: {
      ...button,
      bg: "secondary",
      borderColor: "primary",
      borderStyle: "solid",
      borderWidth: "2px",
      color: "primary",
      fontSize: "28px",
      height: "40px",
      padding: "0px",
      width: "40px",
    },
    iconInverted: {
      ...button,
      bg: "secondary",
      color: "primary",
      fontSize: "28px",
      height: "40px",
      padding: "0px",
      width: "40px",
    },
  },
  colors: {
    background: "#ffffff",
    gray: "#8b8c8e",
    primary: "#000000",
    secondary: "#ffffff",
    text: "#000000",
  },
  fontSizes: [12, 19, 30, 48, 52, 98],
  fontWeights: {
    light: 200,
    body: 400,
    heading: 400,
  },
  fonts: {
    body: "Barlow, sans-serif",
    heading: "Bebas Neue, sans-serif",
  },
  layout: {
    container: {
      px: 3,
    },
  },
  sizes: {
    container: "1280px",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  styles: {
    root: {
      fontFamily: "body",
      fontSize: 1,
      fontWeight: "body",
    },
  },
  text: {
    h1: {
      ...heading,
      fontSize: 5,
    },
    h2: {
      ...heading,
      fontSize: 4,
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    price: {
      fontWeight: "light",
      fontSize: 2,
    },
  },
}

export default theme
