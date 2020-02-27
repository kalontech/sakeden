import { ShopifyProductVariant } from "../../graphql-types"

export const formatPrice = (
  amount: number,
  currencyCode: string,
  fractionDigits: number,
): string => {
  return Intl.NumberFormat(undefined, {
    currency: currencyCode,
    minimumFractionDigits: fractionDigits,
    style: "currency",
  }).format(amount)
}

export const getPriceFromVariants = (
  variants: ShopifyProductVariant[],
  fractionDigits = 2,
  subscriptionInterval = 0,
): string => {
  // USD is just a fallback value while the real currency code will be taken from the checkout.
  let currencyCode = "USD"
  let minAmount = Number.MAX_VALUE
  let maxAmount = Number.MIN_VALUE

  // Determine minimum and maximum amounts.
  for (const variant of variants) {
    if (
      variant.priceV2 &&
      variant.priceV2.amount &&
      variant.priceV2.currencyCode
    ) {
      // Parse amount
      const amount = parseFloat(variant.priceV2.amount)

      // Update currency code.
      if (currencyCode !== variant.priceV2.currencyCode) {
        currencyCode = variant.priceV2.currencyCode
      }

      // Update minimum amount.
      if (amount < minAmount) {
        minAmount = amount
      }

      // Update maximum amount.
      if (amount > maxAmount) {
        maxAmount = amount
      }
    }
  }

  // Fallback to zeros.
  if (minAmount === Number.MAX_VALUE || maxAmount === Number.MIN_VALUE) {
    minAmount = 0
    maxAmount = 0
  }

  // Build a string for the formatted price output.
  let formattedPrice = ""

  // Additional formatting for subscription-based prices..
  if (subscriptionInterval > 0) {
    // Append "/month" suffix.
    formattedPrice = " / month"

    // Divide the amounts by subscription interval.
    minAmount /= subscriptionInterval
    maxAmount /= subscriptionInterval
  }

  if (minAmount === maxAmount) {
    // Format common price.
    formattedPrice =
      formatPrice(minAmount, currencyCode, fractionDigits) + formattedPrice
  } else {
    // Format range of prices.
    formattedPrice =
      `${formatPrice(minAmount, currencyCode, fractionDigits)} - ${formatPrice(
        maxAmount,
        currencyCode,
        fractionDigits,
      )}` + formattedPrice
  }

  return formattedPrice
}
