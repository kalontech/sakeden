export const fbq = (key: string, value: string): void => {
  if (process.env.NODE_ENV === "production" && typeof fbq === "function") {
    fbq(key, value)
  }
}
