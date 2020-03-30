import _ from "lodash"
import React, { useState } from "react"
import Select, { Styles, Theme } from "react-select"
import { Box, Flex } from "theme-ui"

import { ShopifyCollection } from "../../graphql-types"

const selectStyles: Partial<Styles> = {
  control: styles => ({
    ...styles,
    borderColor: "black",
    borderRadius: 0,
    borderWidth: "2px",
    minWidth: "300px",
  }),
}

const selectTheme: (theme: Theme) => Theme = theme => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary: "black",
    primary25: "rgba(0, 0, 0, 0.25)",
    primary50: "rgba(0, 0, 0, 0.50)",
    primary75: "rgba(0, 0, 0, 0.75)",
  },
})

interface ProductFiltersProps {
  breweriesFilterValue?: string
  onBreweriesFilterChange?: (value: string) => void
  onPriceFilterChange?: (value: string) => void
  onSubsetFilterChange?: (value: string) => void
  priceFilterValue?: string
  subsetFilterValue?: string
  shopifyCollection: ShopifyCollection
  showBreweriesFilter?: boolean
  showPriceFilter?: boolean
  showSubsetFilter?: boolean
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  breweriesFilterValue,
  onBreweriesFilterChange,
  onPriceFilterChange,
  onSubsetFilterChange,
  priceFilterValue,
  subsetFilterValue,
  shopifyCollection,
  showBreweriesFilter = true,
  showPriceFilter = true,
  showSubsetFilter = true,
}) => {
  const breweries = _.sortBy(
    _.uniq(
      shopifyCollection &&
        shopifyCollection.products!.map(product => {
          return product!.vendor
        }),
    ),
  )

  const subsetOptions = [
    { label: "Full Collection", value: "ALL" },
    { label: "Best Sellers", value: "Best Sellers" },
    { label: "Reader's Choice", value: "Reader's Choice" },
    { label: "Sommelier's Choice", value: "Sommelier's Choice" },
  ]

  const breweriesOptions = [
    { label: "Show All", value: "ALL" },
    ...breweries.map(brewery => {
      return {
        label: brewery,
        value: brewery,
      }
    }),
  ]

  const priceOptions = [
    { label: "Lowest to Highest", value: "asc" },
    { label: "Highest to Lowest", value: "desc" },
  ]

  return (
    <Flex sx={{ flexDirection: ["column", "column", "row", "row"] }}>
      {showBreweriesFilter && (
        <Box sx={{ mb: [3, 3, 0, 0], mr: [0, 0, 3, 3] }}>
          <Select
            name="color"
            onChange={(option): void => {
              if (option) {
                onBreweriesFilterChange &&
                  onBreweriesFilterChange((option as any).value)
              }
            }}
            options={breweriesOptions}
            styles={selectStyles}
            theme={selectTheme}
            value={{
              label: `Breweries: ${
                breweriesOptions.find(
                  breweriesOption =>
                    breweriesOption.value === breweriesFilterValue,
                )!.label
              }`,
              value: breweriesOptions.find(
                breweriesOption =>
                  breweriesOption.value === breweriesFilterValue,
              )!.value,
            }}
          />
        </Box>
      )}
      {showSubsetFilter && (
        <Box sx={{ mb: [3, 3, 0, 0], mr: [0, 0, 3, 3] }}>
          <Select
            name="color"
            onChange={(option): void => {
              if (option) {
                onSubsetFilterChange &&
                  onSubsetFilterChange((option as any).value)
              }
            }}
            options={subsetOptions}
            styles={selectStyles}
            theme={selectTheme}
            value={{
              label: `${
                subsetOptions.find(
                  subsetOption => subsetOption.value === subsetFilterValue,
                )!.label
              }`,
              value: subsetOptions.find(
                subsetOption => subsetOption.value === subsetFilterValue,
              )!.value,
            }}
          />
        </Box>
      )}
      {showPriceFilter && (
        <Box>
          <Select
            name="color"
            onChange={(option): void => {
              if (option) {
                onPriceFilterChange &&
                  onPriceFilterChange((option as any).value)
              }
            }}
            options={priceOptions}
            styles={selectStyles}
            theme={selectTheme}
            value={{
              label: `Price: ${
                priceOptions.find(
                  priceOption => priceOption.value === priceFilterValue,
                )!.label
              }`,
              value: priceOptions.find(
                priceOption => priceOption.value === priceFilterValue,
              )!.value,
            }}
          />
        </Box>
      )}
    </Flex>
  )
}

export default ProductFilters
