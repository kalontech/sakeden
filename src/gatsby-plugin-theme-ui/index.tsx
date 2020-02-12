/* eslint-disable sort-keys */

const heading = {
  color: "text",
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
}

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#222fff",
    secondary: "#30c",
    muted: "#f6f6f6",
  },
  sizes: {
    container: "1200px",
  },
  layout: {
    container: {
      px: 3,
    },
  },
  styles: {
    root: {
      fontFamily: "body",
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
    h6: {
      ...heading,
      fontSize: 0,
    },
  },
}

export default theme
