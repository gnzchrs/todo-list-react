import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native'
import { RFValue as rf } from 'react-native-responsive-fontsize'
import { Entypo, Feather } from 'react-native-vector-icons'
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu'

import Header from '../global/Header/Header'
import Button from '../global/Button/Button'
import Card from './components/Card'
import LoadingScreen from '../global/LoadingScreen/LoadingScreen'
import BottomSheet from '../global/BottomSheet/BottomSheet'
import Modale from '../global/Modal/Modale'

const windowHeight = Dimensions.get('screen').height
const s = require('../global/globalStyle')

const Homepage = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [visible, setVisible] = useState(false)
  const hideMenu = () => setVisible(false)
  const [active, setActive] = useState(false)
  const showMenu = () => setVisible(true)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users/1/todos', {
  //     method: 'GET',
  //   })
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false))
  // }, [])

  const homeData = ({ item }) => (
    <Card
      type={item.completed}
      title={item.title}
      date={item.id}
      description={item.description}
      onPress={() => navigation.navigate('Notes')}
    />
  )
  const addData = () => {
    setData((prevTodos) => {
      return [
        {
          id: Math.random().toString(),
          title: title,
          description: description,
          completed: true,
        },
        ...prevTodos,
      ]
    })
    setModalVisible(!modalVisible)
    setTitle('')
    setDescription('')
  }
  return (
    <View style={styles.container}>
      <Button
        type={'icon'}
        iconName={'plus'}
        iconSize={rf(36)}
        iconColor={'white'}
        style={styles.fixedBtn}
        onPress={() => setModalVisible(!modalVisible)}
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
        <Menu
          visible={visible}
          anchor={
            <TouchableOpacity onPress={showMenu}>
              <Feather name={'filter'} size={rf(24)} color={'#F76C6A'} />
            </TouchableOpacity>
          }
          style={styles.menu}
          onRequestClose={hideMenu}
        >
          <MenuItem
            style={{ ...styles.menuitem, ...s.inputSemiBold }}
            // onPress={() => setActive(!active)}
          >
            <Text
              style={{ ...s.inputSemiBold, color: active ? 'pink' : 'black' }}
            >
              All
            </Text>
          </MenuItem>
          <MenuItem
            style={{ ...styles.menuitem, ...s.inputSemiBold }}
            // onPress={() => setActive(!active)}
          >
            <Text
              style={{ ...s.inputSemiBold, color: active ? 'pink' : 'black' }}
            >
              By Time
            </Text>
          </MenuItem>
          <MenuItem>
            <Text
              style={{ ...s.inputSemiBold, color: active ? 'pink' : 'black' }}
            >
              Deadline
            </Text>
          </MenuItem>
        </Menu>
      </View>
      <FlatList
        data={data}
        renderItem={homeData}
        keyExtractor={(item) => item.id}
        style={{ marginBottom: 15, paddingBottom: 10 }}
        showsVerticalScrollIndicator={false}
      />
      <Modale
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
        type={'note'}
      >
        <View style={styles.modalBody}>
          <KeyboardAvoidingView behavior={'padding'}>
            <View style={{ ...s.inputView, ...styles.input }}>
              <TextInput
                style={[s.input, s.spacing, styles.inputTxt]}
                placeholder={'Title'}
                onChangeText={setTitle}
                placeholderTextColor={'rgba(255,255,255,.8)'}
                selectTextOnFocus={true}
                value={title}
              />
            </View>
          </KeyboardAvoidingView>
          <View
            style={{
              ...s.inputView,
              ...styles.input,
              height: windowHeight / 2 - 50,
              justifyContent: 'flex-start',
            }}
          >
            <TextInput
              multiline={true}
              autoCorrect={false}
              placeholderTextColor={'rgba(255,255,255,.8)'}
              numberOfLines={100}
              style={[
                s.input,
                s.spacing,
                styles.inputTxt,
                {
                  paddingVertical: 15,
                  textAlignVertical: 'top',
                },
              ]}
              placeholder={'Description'}
              onChangeText={setDescription}
              value={description}
            />
          </View>
          <TouchableOpacity
            style={{
              ...s.inputView,
              ...styles.input,
              ...styles.optional,
            }}
          >
            <Text style={{ ...s.input, color: 'rgba(255,255,255,.8)' }}>
              Deadline (Optional)
            </Text>
            <Feather
              name={'calendar'}
              size={24}
              color={'rgba(255,255,255,.8)'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...s.inputView, ...styles.input, ...styles.optional }}
          >
            <Text style={{ ...s.input, color: 'rgba(255,255,255,.8)' }}>
              Add Image (Optional)
            </Text>
            <Feather name={'image'} size={24} color={'rgba(255,255,255,.8)'} />
          </TouchableOpacity>
          <Button
            type={'secondary'}
            text={'ADD TO DO'}
            onPress={() => addData()}
          />
        </View>
      </Modale>
    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: '5%', backgroundColor: 'white' },
  menu: {
    borderRadius: 12,
    marginTop: 30,
    marginRight: 70,
    width: 130,
  },
  fixedBtn: {
    position: 'absolute',
    backgroundColor: '#F76C6A',
    right: 0,
    top: windowHeight - 180,
    padding: 10,
    zIndex: 1,
  },
  modalBody: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'space-evenly',
    paddingVertical: 15,
  },
  input: {
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
  },
  inputTxt: { color: 'white' },
  optional: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
