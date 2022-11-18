import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native'
const s = require('../global/globalStyle')

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
            style={styles.input}
            placeholder={'Email'}
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <View style={s.inputView}>
          <TextInput
            style={[styles.input, styles.spacing]}
            placeholder={'Password'}
            onChangeText={setPassword}
            value={password}
          />
        </View>
        <TouchableOpacity style={{ alignItems: 'flex-end' }}>
          <Text style={styles.input}>Forgot Password?</Text>
        </TouchableOpacity>
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
  input: {
    fontFamily: 'Montserrat-Regular',

    fontSize: 16,
  },
  spacing: {
    letterSpacing: 1,
  },
})
