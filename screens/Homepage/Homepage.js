import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native'
import { RFValue as rf } from 'react-native-responsive-fontsize'
import { Entypo, Feather } from 'react-native-vector-icons'

import Header from '../global/Header/Header'
import Button from '../global/Button/Button'
import Card from './components/Card'

const windowHeight = Dimensions.get('screen').height
const s = require('../global/globalStyle')

const Homepage = ({ navigation }) => {
  const [data, setData] = useState([
    {
      id: '1',
      type: 'notyet',
      title: 'Design Logo',
      description: 'Make logo for the mini project',
      dateCreated: '09-01-2021',
    },
    {
      id: '2',
      type: 'done',
      title: 'Make UI Design',
      description:
        'Make Ui design for the mini project post figma link to the trello using React',
      dateCreated: '09-01-2021',
    },
  ])
  const homeData = ({ item }) => (
    <Card type={item.type} title={item.title} description={item.description} />
  )
  const addData = () => {
    setData((prevTodos) => {
      return [
        {
          id: Math.random().toString(),
          title: 'New Todo',
          type: 'notyet',
        },
        ...prevTodos,
      ]
    })
  }
  return (
    <View style={styles.container}>
      <Button
        type={'icon'}
        iconName={'plus'}
        iconSize={rf(36)}
        iconColor={'white'}
        style={{
          position: 'absolute',
          backgroundColor: '#F76C6A',
          right: 0,
          top: windowHeight - 180,
          padding: 10,
          zIndex: 1,
        }}
        onPress={() => console.log(data)}
        // onPress={() => addData()}
      />
      <Header type={'home'} onPress={() => navigation.navigate('Settings')} />

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
      <FlatList
        data={data}
        renderItem={homeData}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: '5%', backgroundColor: 'white' },
})
