import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Header from '../global/Header/Header'

const Homepage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header type={'home'} />
    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: '5%' },
})
