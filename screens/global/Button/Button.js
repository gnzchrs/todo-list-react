import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { Feather } from 'react-native-vector-icons'
import { RFValue as rf } from 'react-native-responsive-fontsize'

const windowWidth = Dimensions.get('window').width
const s = require('../../global/globalStyle')

const Button = (props) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      {props.type == 'primary' && (
        <TouchableOpacity
          delayPressIn={0}
          style={{ ...styles.primary, ...props?.style }}
          onPress={() => props.onPress()}
        >
          <Text style={{ ...s.buttonFont, color: '#FFFFFF' }}>
            {props.text}
          </Text>
        </TouchableOpacity>
      )}
      {props.type == 'secondary' && (
        <TouchableOpacity
          delayPressIn={0}
          style={{ ...styles.secondary, ...props?.style }}
          onPress={() => props.onPress()}
        >
          <Text style={{ ...s.buttonFont, color: '#F79E89', ...props?.style }}>
            {props.text}
          </Text>
        </TouchableOpacity>
      )}
      {props.type == 'icon' && (
        <TouchableOpacity
          delayPressIn={0}
          style={{ ...styles.icon, ...props?.style }}
          onPress={() => props.onPress()}
        >
          <Feather
            name={props.iconName}
            color={props?.iconColor ?? '#272727'}
            size={props?.iconSize ?? rf(24)}
          />
        </TouchableOpacity>
      )}
      {props.type == 'icon-disabled' && (
        <TouchableOpacity
          disabled={true}
          delayPressIn={0}
          style={{ ...styles.icon, ...props?.style }}
          onPress={() => props.onPress()}
        >
          <Feather
            name={props.iconName}
            color={props?.iconColor ?? 'rgba(71,71,71,.6)'}
            size={props?.iconSize ?? rf(24)}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  primary: {
    backgroundColor: '#F79E89',
    width: windowWidth / 1.2,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondary: {
    backgroundColor: 'white',
    width: windowWidth / 1.2,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    borderRadius: 50,
  },
})
