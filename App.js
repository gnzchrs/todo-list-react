import React from 'react'
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
import SystemNavigationBar from 'react-native-system-navigation-bar'
import LoadingScreen from './screens/global/LoadingScreen/LoadingScreen'

//screens
import Homepage from './screens/Homepage/Homepage'
import Login from './screens/Authentication/Login'
import Signup from './screens/Authentication/Signup'
import ChangePassword from './screens/Authentication/ChangePassword'
import Notes from './screens/Notes/Notes'

import Settings from './screens/Settings/Settings'

const App = () => {
  const Stack = createNativeStackNavigator()

  // useEffect(() => {
  //   const show = async () => {
  //     const result = await SystemNavigationBar.navigationHide()
  //     console.log('Show: ', result) // true or Error Message
  //   }
  // }, [])

  const [loaded] = useFonts({
    'Montserrat-Regular': require('./assets/font/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./assets/font/Montserrat-SemiBold.ttf'),
    'Montserrat-Medium': require('./assets/font/Montserrat-Medium.ttf'),
    'BebasNeue-Regular': require('./assets/font/BebasNeue-Regular.ttf'),
  })

  if (!loaded) {
    return <LoadingScreen />
  }
  const Auth = () => {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: 'none' }}
      >
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Notes" component={Notes} />
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
