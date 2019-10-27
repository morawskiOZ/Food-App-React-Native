import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

interface Props {
  result: any
}

const ResultsDetail = ({ result }: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url ? result.image_url : "" }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginRight: 5,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold'
  }
})

export default ResultsDetail
