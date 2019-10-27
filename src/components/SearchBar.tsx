import { Feather } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

interface Props {
  query: string
  onChange: (query: string) => void
  onTermSubmit: () => void
}

const SearchBar = ({ onChange, query, onTermSubmit }: Props) => {
  return (
    <View style={styles.wrapper}>
      <Feather name="search" size={35} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={"Search..."}
        value={query}
        onChangeText={onChange}
        onEndEditing={onTermSubmit}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 5
  },
  input: {
    flex: 1,
    fontSize: 18
  },
  icon: {
    alignSelf: "center",
    marginHorizontal: 15
  }
})

export default SearchBar
