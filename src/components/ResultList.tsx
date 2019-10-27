import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationContext } from 'react-navigation'

import ResultsDetail from './ResultDetail'

interface Props {
  title: string
  results: any[]
}

const ResultsList = ({ title, results }: Props) => {
  
  const navigation = useContext(NavigationContext)
  
  if (!results.length) {
    return null
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(result: any) => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ResultShow', {
                id: item.id
              })
            }
          >
            <ResultsDetail result={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  }
})

export default ResultsList
