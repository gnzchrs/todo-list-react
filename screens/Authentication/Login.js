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

import Button from '../global/Button/Button'

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
    <View style={styles.container}>
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
      <View style={{ flex: 1 }}>
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
          <Text style={s.input}>Forgot Password?</Text>
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
          <Text style={{ ...s.input, color: 'rgba(39,39,39,.4)' }}>
            Don't have an account?{' '}
          </Text>
          <TouchableOpacity>
            <Text style={{ ...s.input, color: '#F79E89' }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
})
