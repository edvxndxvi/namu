import { Pressable, Text, StyleSheet, View } from 'react-native'
import SkeletonContentDetails from '../components/Content/SkeletonContentDetails'
import ScreenContainer from '../components/Layout/ScreenContainer'
import { ContentDetail } from '../types'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'
import { GET_CONTENT_BY_ID } from '../service/api'
import ContentDetails from '../components/Content/ContentDetails'
import ErrorState from '../components/State/ErrorState'
import { useNavigation } from '@react-navigation/native'

export default function ContentDetailScreen({
  route,
}: {
  route: { params: { contentId: number } }
}) {
  const { contentId: id } = route.params
  const { data, loading, error, request } = useFetch<ContentDetail>()
  const navigation = useNavigation()

  useEffect(() => {
    async function fetchContent() {
      if (!id) return
      const contentId = +id
      const { url, options } = GET_CONTENT_BY_ID(contentId)
      await request(url, options)
    }
    fetchContent()
  }, [id, request])

  return (
    <ScreenContainer>
      <View>
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Voltar para o catálogo</Text>
        </Pressable>
        {loading ? (
          <SkeletonContentDetails />
        ) : data ? (
          <>
            <ContentDetails content={data} />
          </>
        ) : (
          error && <ErrorState message={error} />
        )}
      </View>
    </ScreenContainer>
  )
}
const styles = StyleSheet.create({
  backButton: {
    padding: 8,
    marginBottom: 16,
  },
  backButtonText: {
    fontWeight: '600',
  },
})
