import React from 'react'
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native'
const s = require('../globalStyle.js')
const LoadingScreen = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}
    >
      <ActivityIndicator size="large" color="#F76C6A" />
      <Text style={{ ...s.xxsRegular, marginTop: 10 }}>Please wait...</Text>
    </View>
  )
}

export default LoadingScreen
