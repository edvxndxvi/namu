import { createNativeStackNavigator } from "@react-navigation/native-stack"
import TabNavigator from "./TabBar"
import ContentDetailScreen from "../screens/ContentDetailScreen"

const Stack = createNativeStackNavigator()
    
export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabNavigator}/>
      <Stack.Screen
        name="ContentDetail"
        component={ContentDetailScreen}
        options={{ title: 'Detalhe' }}
      />
    </Stack.Navigator>
  )
}