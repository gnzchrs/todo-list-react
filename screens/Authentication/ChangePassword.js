import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'
import Button from '../global/Button/Button'
import { Feather } from 'react-native-vector-icons'

const s = require('../global/globalStyle')
import Logo from './components/Logo'

const ChangePassword = ({ navigation }) => {
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)

  return (
    <View style={s.defaultContainer}>
      <Logo />
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <View
          style={[
            s.inputView,
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
          ]}
        >
          <TextInput
            secureTextEntry={visible}
            placeholderTextColor={'#949494'}
            style={[s.input, s.spacing, { width: '90%' }]}
            placeholder={'Password'}
            onChangeText={setPassword}
            autoCorrect={false}
            value={password}
          />
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <Feather
              name={visible ? 'eye-off' : 'eye'}
              size={24}
              color={'#949494'}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            s.inputView,
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
          ]}
        >
          <TextInput
            secureTextEntry={visible}
            placeholderTextColor={'#949494'}
            style={[s.input, s.spacing, { width: '90%' }]}
            placeholder={'Confirm Password'}
            onChangeText={setPassword}
            autoCorrect={false}
            value={password}
          />
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <Feather
              name={visible ? 'eye-off' : 'eye'}
              size={24}
              color={'#949494'}
            />
          </TouchableOpacity>
        </View>
        <Button
          onPress={() => {
            alert('are you Sure?')
          }}
          type={'primary'}
          style={{ marginTop: 15, marginBottom: 60 }}
          text={'CHANGE PASSWORD'}
        />
      </View>
    </View>
  )
}

export default ChangePassword

const styles = StyleSheet.create({})
