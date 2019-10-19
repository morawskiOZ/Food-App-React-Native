import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import yelp from '../API/yelp'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
  const [query, setQuery] = useState<string>('')

  const [searchApi, results, errorMessage] = useResults()

  const handleQueryChange = (term: string) => setQuery(term)

  const handleSubmit = () => searchApi(query)

  return (
    <View>
      <SearchBar
        query={query}
        onChange={handleQueryChange}
        onTermSubmit={handleSubmit}
      />
      <Text>We have found {results.length}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
