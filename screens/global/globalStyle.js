import { StyleSheet, Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width

module.exports = StyleSheet.create({
  //components
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
  defaultContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  input: {
    fontFamily: 'Montserrat-Regular',
    color: '#949494',
    fontSize: 16,
  },
  spacing: {
    letterSpacing: 1,
  },

  // fonts
  buttonFont: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
  },
})
