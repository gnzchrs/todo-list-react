import React from 'react'
import { Image, View } from 'react-native'
const Logo = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <Image
        source={require('../../../assets/icon/login.png')}
        style={{ position: 'absolute', bottom: '15%' }}
      />
    </View>
  )
}

export default Logo
