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
            paddingLeft: 5,
          }}
        >
          <Image
            style={{}}
            source={require('../../../assets/icon/header.png')}
          />
          <Button type={'icon'} iconName={'settings'} onPress={props.onPress} />
        </View>
      )}
      {props.type == 'notes' && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Button
            type={'icon'}
            iconName={'arrow-left'}
            onPress={props.navigateBack}
          />
          <View style={{ flexDirection: 'row' }}>
            <Button
              style={styles.icon}
              type={'icon'}
              iconName={'clock'}
              onPress={props.clock}
            />
            <Button
              style={styles.icon}
              type={'icon'}
              iconName={'edit-2'}
              onPress={props.edit}
            />
            <Button
              style={{ ...styles.icon, marginRight: 0 }}
              type={'icon'}
              iconName={'trash-2'}
              onPress={props.delete}
            />
          </View>
        </View>
      )}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingVertical: 15,
  },
  icon: {
    marginHorizontal: 5,
  },
})
