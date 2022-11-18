import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ActivityIndicator,
} from 'react-native'
import { useFonts } from 'expo-font'

//screens
import Homepage from './screens/Homepage/Homepage'
import Login from './screens/Authentication/Login'

const App = () => {
  const [loaded] = useFonts({
    'Montserrat-Regular': require('./assets/font/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./assets/font/Montserrat-SemiBold.ttf'),
    'BebasNeue-Regular': require('./assets/font/BebasNeue-Regular.ttf'),
  })

  if (!loaded) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator size="large" color="#F76C6A" />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor="#F79E89" />
      <Login />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
