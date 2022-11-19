import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { Feather } from 'react-native-vector-icons'
import { RFValue as rf } from 'react-native-responsive-fontsize'
import Button from '../global/Button/Button'
import Logo from './components/Logo'
const s = require('../global/globalStyle')

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [iconName, setIconName] = useState('eye-off')
  const [visible, setVisible] = useState(false)

  const visiblePassword = (visible) => {
    if (visible) {
      setIconName('eye')
      setVisible(!visible)
    }
    if (!visible) {
      setIconName('eye-off')
      setVisible(!visible)
    }
  }

  return (
    <View style={s.defaultContainer}>
      <Logo />
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <View style={s.inputView}>
          <TextInput
            style={[s.input, s.spacing]}
            placeholder={'Email'}
            onChangeText={setEmail}
            value={email}
          />
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
            placeholder={'Password'}
            onChangeText={setPassword}
            autoCorrect={false}
            value={password}
          />
          <TouchableOpacity onPress={() => visiblePassword(visible)}>
            <Feather name={iconName} size={24} color={'#949494'} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ alignItems: 'flex-end' }}>
          <Text style={{ ...s.xxsRegular }}>Forgot Password?</Text>
        </TouchableOpacity>
        <Button
          type={'primary'}
          style={{ marginTop: 15 }}
          text={'SIGN IN'}
          onPress={() => navigation.navigate('Home')}
        />
        <View
          style={{
            paddingVertical: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ ...s.xxsRegular, color: 'rgba(39,39,39,.4)' }}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{ ...s.xxsRegular, color: '#F79E89', paddingLeft: 5 }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {},
})
