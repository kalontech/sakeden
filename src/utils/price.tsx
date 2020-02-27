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
  let currencyCode = "USD"
  let minAmount = Number.MAX_VALUE
  let maxAmount = Number.MIN_VALUE

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

  if (minAmount === Number.MAX_VALUE || maxAmount === Number.MIN_VALUE) {
    minAmount = 0
    maxAmount = 0
  }

  let formattedPrice = ""

  if (subscriptionInterval > 0) {
    formattedPrice = " / month"

    minAmount /= subscriptionInterval
    maxAmount /= subscriptionInterval
  }

  if (minAmount === maxAmount) {
    formattedPrice =
      formatPrice(minAmount, currencyCode, fractionDigits) + formattedPrice
  } else {
    formattedPrice =
      `${formatPrice(minAmount, currencyCode, fractionDigits)} - ${formatPrice(
        maxAmount,
        currencyCode,
        fractionDigits,
      )}` + formatPrice
  }

  return formattedPrice
}
