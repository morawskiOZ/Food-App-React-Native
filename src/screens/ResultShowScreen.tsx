import React, { useContext, useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { FlatList, NavigationContext } from 'react-navigation'

import yelp from '../API/yelp'

const ResultShowScreen = () => {
  const navigation = useContext(NavigationContext)
  const [result, setResult] = useState(null)
  const id = navigation.getParam('id')
  console.log(id)

  const getResult = async (id: string) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photo}
        keyExtractor={(photo: string) => photo}
        renderItem={({ item }) => <Image style={styles.image} source={{ uri: item }} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 'auto'
  }
})

export default ResultShowScreen
