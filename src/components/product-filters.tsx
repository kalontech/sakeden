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
  onBreweriesFilterChange?: (value: string) => void
  onPriceFilterChange?: (value: string) => void
  shopifyCollection: ShopifyCollection
  showBreweriesFilter?: boolean
  showPriceFilter?: boolean
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  onBreweriesFilterChange,
  onPriceFilterChange,
  shopifyCollection,
  showBreweriesFilter = true,
  showPriceFilter = true,
}) => {
  const [breweriesFilterValue, setBreweriesFilterValue] = useState({
    label: "Breweries: Show All",
    value: "*",
  })
  const [priceFilterValue, setPriceFilterValue] = useState({
    label: "Price: Lowest to Highest",
    value: "asc",
  })

  const breweries = _.sortBy(
    _.uniq(
      shopifyCollection &&
        shopifyCollection.products!.map(product => {
          return product!.vendor
        }),
    ),
  )

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
                setBreweriesFilterValue({
                  label: `Breweries: ${(option as any).label}`,
                  value: (option as any).value,
                })
              }
            }}
            options={breweries.map(brewery => {
              return {
                label: brewery,
                value: brewery,
              }
            })}
            styles={selectStyles}
            theme={selectTheme}
            value={breweriesFilterValue}
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
                setPriceFilterValue({
                  label: `Price: ${(option as any).label}`,
                  value: (option as any).value,
                })
              }
            }}
            options={[
              { label: "Lowest to Highest", value: "asc" },
              { label: "Highest to Lowest", value: "desc" },
            ]}
            styles={selectStyles}
            theme={selectTheme}
            value={priceFilterValue}
          />
        </Box>
      )}
    </Flex>
  )
}

export default ProductFilters
