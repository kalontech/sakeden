import React from "react"
import { Box, Flex, Select } from "theme-ui"

import { ShopifyCollection } from "../../graphql-types"

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
  return (
    <Flex>
      {showBreweriesFilter && (
        <Box mr={3}>
          <Select
            onChange={(e): void => {
              onBreweriesFilterChange && onBreweriesFilterChange(e.target.value)
            }}
          >
            <option value="*">Brewery: Show All</option>
            {shopifyCollection &&
              shopifyCollection.products!.map(product => {
                return (
                  <option value={product!.vendor || ""}>
                    Brewery: {product && product.vendor}
                  </option>
                )
              })}
          </Select>
        </Box>
      )}
      {showPriceFilter && (
        <Box>
          <Select
            onChange={(e): void => {
              onPriceFilterChange && onPriceFilterChange(e.target.value)
            }}
          >
            <option value="asc">Price: Lowest to Highest</option>
            <option value="desc">Price: Highest to Lowest</option>
          </Select>
        </Box>
      )}
    </Flex>
  )
}

export default ProductFilters
