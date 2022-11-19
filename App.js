import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ActivityIndicator,
} from 'react-native'
import { useFonts } from 'expo-font'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

//screens
import Homepage from './screens/Homepage/Homepage'
import Login from './screens/Authentication/Login'
import Signup from './screens/Authentication/Signup'

const App = () => {
  const Stack = createNativeStackNavigator()

  const [loaded] = useFonts({
    'Montserrat-Regular': require('./assets/font/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./assets/font/Montserrat-SemiBold.ttf'),
    'Montserrat-Medium': require('./assets/font/Montserrat-Medium.ttf'),

    'BebasNeue-Regular': require('./assets/font/BebasNeue-Regular.ttf'),
  })

  if (!loaded) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator size="large" color="#F76C6A" />
      </View>
    )
  }
  const Auth = () => {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: 'none' }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Homepage} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar hidden={false} backgroundColor="#F79E89" />
        <Auth />
      </View>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
