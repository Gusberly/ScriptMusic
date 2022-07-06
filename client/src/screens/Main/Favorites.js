import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Favorites = () => {
  return (
    <View style={styles.wrapper}>
    <View style={styles.container}>
      <Text>Favorites</Text>
    </View>
    </View>
    
  )
}

export default Favorites

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    backgroundColor: "#000000",
  },
  container: {
    backgroundColor:"white",
    // width: "100%",
    height: "100%",
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    alignItems: "center",
  }
})