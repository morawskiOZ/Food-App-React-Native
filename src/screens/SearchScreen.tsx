import React, { ReactElement, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { $enum } from 'ts-enum-util'

import ResultsList from '../components/ResultList'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
  const [query, setQuery] = useState<string>('')

  const [searchApi, results, errorMessage] = useResults()

  const handleQueryChange = (term: string) => setQuery(term)

  const handleSubmit = () => searchApi(query)

  enum PriceRange {
    CHEAP = '$',
    NORMAL = '$$',
    EXPENSIVE = '$$$'
  }
  type Category = { [key: string]: string }
  const Categories: Category = {
    [PriceRange.CHEAP]:  'Cost Effective',
    [PriceRange.NORMAL]: 'Bit Pricier',
    [PriceRange.EXPENSIVE]: 'Big spender'
  }

  const filterResultsByPrice = (price: PriceRange) =>
    results
      .filter(result => result.price === price)
      .sort((a, b) => {
        return b.rating - a.rating
      })

  return (
    <View style={styles.wrapper}>
      <SearchBar
        query={query}
        onChange={handleQueryChange}
        onTermSubmit={handleSubmit}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {Object.entries(Categories).map(([priceRange, title]: [PriceRange, string]): ReactElement => {
          return (
            <ResultsList
              results={filterResultsByPrice(priceRange)}
              title={title}
              key={title}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})

export default SearchScreen
