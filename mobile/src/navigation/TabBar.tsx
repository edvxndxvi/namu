import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ContentsScreen from "../screens/ContentsScreen"
import FavoritesScreen from "../screens/FavoritesScreen"

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarLabelStyle: { fontSize: 16, fontWeight: 300, marginTop: 12 }, tabBarIconStyle: { display: 'none' } }}>
      <Tab.Screen name="Contents" component={ContentsScreen} options={{ title: 'Conteúdos',  }}/>
      <Tab.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Favoritos' }} />
    </Tab.Navigator>
  )
}