import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { Feather } from 'react-native-vector-icons'
import Button from '../Button/Button'
const s = require('../globalStyle')

const Header = (props) => {
  return (
    <View style={styles.container}>
      {props.type == 'home' && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Image source={require('../../../assets/icon/header.png')} />
          <Button
            type={'icon'}
            iconName={'settings'}
            onPress={() => alert('settings clicked')}
          />
        </View>
      )}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
})
