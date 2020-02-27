const heading = {
  fontFamily: "heading",
  fontWeight: "heading",
  lineHeight: "heading",
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
  padding: "0 24px",
  transition: "200ms ease-in-out",
}

const theme = {
  buttons: {
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
  },
  colors: {
    background: "#ffffff",
    danger: "#cc3333",
    gray: "#cccccc",
    primary: "#000000",
    secondary: "#ffffff",
    text: "#000000",
  },
  fontSizes: [12, 19, 30, 48, 52, 98],
  fontWeights: {
    light: 200,
    // eslint-disable-next-line sort-keys
    body: 400,
    heading: 400,
  },
  fonts: {
    body: "Barlow, sans-serif",
    heading: "Bebas Neue, sans-serif",
  },
  forms: {
    borderless: {
      borderColor: "transparent",
      outline: "none",
      padding: "8px 0",
    },
    input: {
      borderColor: "gray",
    },
    textarea: {
      borderColor: "gray",
    },
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
      fontSize: 2,
      fontWeight: "light",
    },
  },
}

export default theme
