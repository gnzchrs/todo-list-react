import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

const LoadingScreen = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <ActivityIndicator size="large" color="#F76C6A" />
    </View>
  )
}

export default LoadingScreen
