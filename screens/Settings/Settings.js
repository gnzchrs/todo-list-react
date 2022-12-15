import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { RFValue as rf } from 'react-native-responsive-fontsize'

import Illustration from './components/Illustration'
import Button from '../global/Button/Button'
import Header from '../global/Header/Header'

const s = require('../global/globalStyle')

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header type={'home'} onPress={() => navigation.pop()} iconName={''} />
      <Illustration />
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}
      >
        <View>
          <View style={styles.line}>
            <Text style={{ ...s.input }}>Full Name</Text>
            <Text style={{ ...s.inputSemiBold, color: '#F79E89' }}>
              Christopher Gonzaga
            </Text>
          </View>
          <View style={styles.line}>
            <Text style={{ ...s.input }}>Email</Text>
            <Text style={{ ...s.input, color: '#F79E89', fontSize: rf(12) }}>
              christophergonzaga63@gmail.com
            </Text>
          </View>
          <View style={styles.line}>
            <Text style={{ ...s.input }}>Password</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('ChangePassword')}
            >
              <Text style={{ ...s.input, color: '#F79E89' }}>
                Change Password
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Button
          onPress={() => navigation.navigate('Simplified')}
          type="primary"
          style={{ marginBottom: 80, marginTop: 50 }}
          text={'SWITCH TO SIMPLIFIED TODO LIST'}
        />
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: '5%',
    flex: 1,
  },
  line: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
})
