import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { Feather } from 'react-native-vector-icons'

const s = require('../../global/globalStyle')

const Card = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      {props.type === 'notyet' && (
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(247, 108, 106, 1)',
            borderRadius: 12,
            padding: 15,
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingBottom: 7,
          }}
        >
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: 10,
              }}
            >
              <Text style={{ ...s.inputSemiBold, color: 'white' }}>
                {props.title}
              </Text>
              <Feather name={'clock'} color={'white'} size={16} />
            </View>
            <Text
              style={{ ...s.xsRegular, color: 'white', width: '80%' }}
              numberOfLines={2}
            >
              {props.description}
            </Text>
          </View>
          <Text style={{ ...s.xxsRegular, color: 'white' }}>
            Created at {props.date}
          </Text>
        </View>
      )}
      {props.type === 'done' && (
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(247, 158, 137, 1)',
            borderRadius: 12,
            padding: 15,
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingBottom: 7,
          }}
        >
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: 10,
              }}
            >
              <Text style={{ ...s.inputSemiBold, color: 'white' }}>
                {props.title}
              </Text>
            </View>
            <Text
              style={{ ...s.xsRegular, color: 'white', width: '80%' }}
              numberOfLines={2}
            >
              {props.description}
            </Text>
          </View>
          <Text style={{ ...s.xxsRegular, color: 'white' }}>
            Created at {props.date}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  )
}
export default Card
const styles = StyleSheet.create({
  container: { height: 140, width: '100%', marginVertical: 8 },
})
