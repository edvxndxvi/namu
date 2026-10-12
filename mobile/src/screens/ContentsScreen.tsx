import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Text, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function ContentsScreen() {
 const navigation = useNavigation<NativeStackNavigationProp<{ ContentDetail: undefined }>>()
  return (
    <SafeAreaView>
      <Text>ContentsScreen</Text>
        <Pressable
        onPress={() => navigation.navigate('ContentDetail')}
      >
        <Text>Abrir conteúdo 1</Text>
        
    </Pressable>
    </SafeAreaView>
  )
}
