import { Text, StyleSheet } from "react-native"
import ScreenContainer from "../components/Layout/ScreenContainer"
import Feed from "../components/Feed/Feed"
import { useContent } from "../hooks/useContent"

export default function HomeScreen() {
    const { data: contents, loading, error, reload } = useContent({ categoryFilter: '', page: 1, search: '' })

  return (
    <ScreenContainer>
      <Text style={styles.title}>Conteúdos</Text>
      {contents ? 
        (
          <Feed
            contents={contents.data}
            loading={loading}
            onRefresh={reload}
          />
        ) : error && <></> 
      }
    </ScreenContainer>
  )
}
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
})
