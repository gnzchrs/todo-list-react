import { StyleSheet, Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width
import { RFValue as rf } from 'react-native-responsive-fontsize'

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
    backgroundColor: 'white',

    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  con: { flex: 1, paddingHorizontal: '5%', backgroundColor: 'white' },

  spacing: {
    letterSpacing: 1,
  },
  // fonts
  buttonFont: {
    fontFamily: 'Montserrat-Medium',
    fontSize: rf(14),
  },
  input: {
    fontFamily: 'Montserrat-Regular',
    color: '#949494',
    fontSize: rf(16),
  },
  inputSemiBold: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#949494',
    fontSize: rf(16),
  },
  bebasRegular: {
    fontFamily: 'BebasNeue-Regular',
    color: '#949494',
    fontSize: rf(36),
  },
  bebasSmall: {
    fontFamily: 'BebasNeue-Regular',
    color: '#272727',
    fontSize: rf(26),
  },

  xsRegular: {
    fontFamily: 'Montserrat-Regular',
    color: '#949494',
    fontSize: rf(14),
  },
  xxsRegular: {
    fontFamily: 'Montserrat-Regular',
    color: '#949494',
    fontSize: rf(12),
  },
})
