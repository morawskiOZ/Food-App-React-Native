import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import yelp from '../API/yelp'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  const [query, setQuery] = useState<string>('')
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const handleQueryChange = (term: string) => setQuery(term)

  const handleSubmit = () => searchApi(query)

  useEffect(() => {
    searchApi('fries')
  }, [])

  const searchApi = async (searchTerm: string) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'Wrocław'
        }
      })
      setResults(response.data.businesses)
    } catch (error) {
      setErrorMessage('Something went wrong')
    }
  }
  if (errorMessage) {
    return (
      <View>
        <SearchBar
          query={query}
          onChange={handleQueryChange}
          onTermSubmit={handleSubmit}
        />
        <Text>{errorMessage}</Text>
      </View>
    )
  }
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
