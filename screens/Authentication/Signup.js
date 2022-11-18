import React from 'react'
import { View, Text, TextInput, StyleSheet, Image } from 'react-native'

const s = require('../global/globalStyle')

const Signup = ({ navigation }) => {
  return (
    <View style={s.defaultContainer}>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={require('../../assets/icon/login.png')}
          style={{ position: 'absolute' }}
        />
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  )
}
export default Signup

const styles = StyleSheet.create({})
