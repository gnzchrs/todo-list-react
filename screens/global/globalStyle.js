import { StyleSheet, Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width

module.exports = StyleSheet.create({
  inputView: {
    height: 50,
    width: windowWidth / 1.2,
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(39, 39, 39,.5)',
    borderRadius: 10,
    marginVertical: 10,
  },
})
