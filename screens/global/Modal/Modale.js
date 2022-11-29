import React, { useState } from 'react'
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native'

const s = require('../globalStyle')
const windowHeight = Dimensions.get('screen').height

const Modale = (props) => {
  const [modalVisible, setModalVisible] = useState(false)
  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onRequestClose}
    >
      {props.type == 'note' && (
        <View style={styles.modal}>
          <TouchableOpacity style={styles.bar} />
          <View style={{ flex: 1 }}>{props.children}</View>
        </View>
      )}
      {props.type == 'delete' && (
        <View style={styles.backdrop}>{props.children}</View>
      )}
    </Modal>
  )
}
export default Modale

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    height: windowHeight - 150,
    width: '100%',
    backgroundColor: '#F79E89',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bar: {
    height: 5,
    backgroundColor: 'white',
    width: 100,
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 15,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
})
