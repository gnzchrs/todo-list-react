import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native'
import { RFValue as rf } from 'react-native-responsive-fontsize'
import { Entypo, Feather } from 'react-native-vector-icons'
import Header from '../global/Header/Header'
import Button from '../global/Button/Button'

const windowHeight = Dimensions.get('window').height
const s = require('../global/globalStyle')

const Homepage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header type={'home'} onPress={() => navigation.navigate('Settings')} />
      <Button
        type={'icon'}
        iconName={'plus'}
        iconSize={rf(36)}
        iconColor={'white'}
        style={{
          position: 'absolute',
          backgroundColor: '#F76C6A',
          right: 0,
          top: windowHeight - rf(130),
          padding: 10,
        }}
        onPress={() => alert('ey')}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingVertical: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Entypo name={'list'} size={rf(36)} color={'#F76C6A'} />
          <Text
            style={{ ...s.bebasRegular, color: '#F76C6A', paddingLeft: 10 }}
          >
            LIST OF TO DO
          </Text>
        </View>
        <TouchableOpacity>
          <Feather name={'filter'} size={rf(24)} color={'#F76C6A'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: '5%', backgroundColor: 'white' },
})
