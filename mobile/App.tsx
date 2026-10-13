/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import RootNavigator from './src/navigation/RootNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { FavoriteProvider } from './src/context/favoriteContext'

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <FavoriteProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </FavoriteProvider>
    </SafeAreaProvider>
  )
}

export default App
