import React, { useState } from 'react'
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Dimensions,
} from 'react-native'

const s = require('../globalStyle')
const windowHeight = Dimensions.get('screen').height
const minus = 150

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
      animationInTiming={1}
      animationOutTiming={1}
    >
      {props.type == 'note' && (
        <View style={{ ...styles.modal, height: windowHeight - minus }}>
          <TouchableWithoutFeedback onPress={() => console.log('clicked')}>
            <View style={styles.hover}>
              <TouchableOpacity style={styles.bar} />
            </View>
          </TouchableWithoutFeedback>
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
    height: windowHeight - minus,
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
  hover: {
    width: '100%',
  },
})
