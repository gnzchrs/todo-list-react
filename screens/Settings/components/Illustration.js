import React from 'react'
import { Image, View, StyleSheet } from 'react-native'

const Illustration = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <Image source={require('../../../assets/icon/illustration.png')} />
    </View>
  )
}
export default Illustration
