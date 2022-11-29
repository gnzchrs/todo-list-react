import React, { useState } from 'react'
import { Animated, View, StyleSheet, Text, ScrollView } from 'react-native'
import Header from '../global/Header/Header'
const s = require('../global/globalStyle')
import Modale from '../global/Modal/Modale'
import Button from '../global/Button/Button'

const Notes = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={{ ...s.con }}>
      <Header
        type={'notes'}
        navigateBack={() => navigation.pop()}
        clock={() => alert('click clock')}
        edit={() => alert('edit')}
        delete={() => setModalVisible(!modalVisible)}
      />
      <View style={{ marginVertical: 10 }}>
        <Text style={s.bebasSmall}>DESIGN LOGO</Text>
      </View>

      <ScrollView
        style={{
          flex: 1,
          marginVertical: 10,
        }}
      >
        <Text style={{ ...s.input, color: '#272727' }}>
          Mage Logo for mini project
        </Text>
        <Text style={{ ...s.input, color: '#272727' }}>
          In adipisicing quis deserunt deserunt ex aliquip. Ipsum labore aliquip
          in cupidatat nostrud Lorem veniam tempor aliquip cillum mollit aute.
          Ullamco velit deserunt aliquip dolor veniam adipisicing ut excepteur
          fugiat velit magna. Eiusmod irure consequat amet aute aliqua
          exercitation incididunt labore occaecat velit minim deserunt officia.
          Nisi consequat exercitation eiusmod aliquip adipisicing deserunt
          commodo anim. Ad quis amet dolor aliquip ex Lorem nisi. Culpa nostrud
          nostrud Lorem anim adipisicing pariatur qui aliquip enim aliquip
          cupidatat. Magna elit exercitation sit aute proident magna ullamco
          ullamco ea pariatur nisi eiusmod aute. Nostrud et elit irure ipsum
          veniam duis non. Consectetur consequat ullamco amet mollit velit non
          consectetur ad veniam et veniam irure. Est esse ullamco tempor quis
          qui proident incididunt duis pariatur excepteur qui ipsum est labore.
          Eiusmod qui ex cupidatat veniam. Eiusmod anim incididunt ea in dolor
          est do nostrud enim irure. Occaecat aliqua dolore dolor ad aliqua
          occaecat sit consequat non officia occaecat elit. In adipisicing quis
          deserunt deserunt ex aliquip. Ipsum labore aliquip in cupidatat
          nostrud Lorem veniam tempor aliquip cillum mollit aute. Ullamco velit
          deserunt aliquip dolor veniam adipisicing ut excepteur fugiat velit
          magna. Eiusmod irure consequat amet aute aliqua exercitation
          incididunt labore occaecat velit minim deserunt officia. Nisi
          consequat exercitation eiusmod aliquip adipisicing deserunt commodo
          anim. Ad quis amet dolor aliquip ex Lorem nisi. Culpa nostrud nostrud
          Lorem anim adipisicing pariatur qui aliquip enim aliquip cupidatat.
          Magna elit exercitation sit aute proident magna ullamco ullamco ea
          pariatur nisi eiusmod aute. Nostrud et elit irure ipsum veniam duis
          non. Consectetur consequat ullamco amet mollit velit non consectetur
          ad veniam et veniam irure. Est esse ullamco tempor quis qui proident
          incididunt duis pariatur excepteur qui ipsum est labore. Eiusmod qui
          ex cupidatat veniam. Eiusmod anim incididunt ea in dolor est do
          nostrud enim irure. Occaecat aliqua dolore dolo
        </Text>
      </ScrollView>
      <View style={{ alignItems: 'center', paddingVertical: 10 }}>
        <Text style={{ ...s.xsRegular, color: 'black' }}>
          Created at 1 Sept 2021
        </Text>
      </View>
      <Modale
        visible={modalVisible}
        type={'delete'}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalBody}>
          <View style={styles.btn}>
            <Button
              type={'secondary'}
              text={'Delete TODO'}
              style={{ color: '#F76C6A', borderRadius: 15 }}
            />
          </View>
          <View style={styles.btn}>
            <Button
              type={'secondary'}
              text={'Cancel'}
              onPress={() => setModalVisible(!modalVisible)}
              style={{ color: 'rgba(0,255,25,.5)', borderRadius: 15 }}
            />
          </View>
        </View>
      </Modale>
    </View>
  )
}

export default Notes

const styles = StyleSheet.create({
  container: { justifyContent: 'space-between' },
  modalBody: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  btn: {
    marginVertical: 5,
  },
})
