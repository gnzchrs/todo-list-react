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

const Signup = ({ navigation }) => {
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
        <View style={s.inputView}>
          <TextInput
            style={[s.input, s.spacing]}
            placeholder={'Full Name'}
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
            <Feather
              name={visible ? 'eye' : 'eye-off'}
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
          <TouchableOpacity onPress={() => visiblePassword(visible)}>
            <Feather name={iconName} size={24} color={'#949494'} />
          </TouchableOpacity>
        </View>
        <Button
          type={'primary'}
          style={{ marginTop: 15 }}
          text={'SIGN UP'}
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
          <Text style={{ ...s.input, color: 'rgba(39,39,39,.4)' }}>
            Have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ ...s.input, color: '#F79E89' }}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
export default Signup

const styles = StyleSheet.create({})
