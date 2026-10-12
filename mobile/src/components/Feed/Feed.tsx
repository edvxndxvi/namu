import { FlatList, View, StyleSheet } from "react-native"
import { Content } from "../../types"
import FeedItem from "./FeedItem"
import SkeletonFeedItem from "./SkeletonFeedItem"

interface FeedProps {
  contents: Content[]
  loading: boolean
  favoritesList?: boolean
  onRefresh?: () => void
}

function Separator() {
  return <View style={styles.separator} />
}

export default function Feed({ contents, loading, favoritesList, onRefresh }: FeedProps) {
    if (loading)
        return (
        <View>
            {[...Array(8)].map((_, index) => (
                <SkeletonFeedItem key={index} />
            ))}
        </View>
        )

  return (
     <FlatList
      data={contents}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <FeedItem content={item} />}
      ItemSeparatorComponent={Separator}
    //   ListEmptyComponent={<EmptyState favorite={favoritesList} />}
      contentContainerStyle={contents.length === 0 && styles.emptyContainer}
      onRefresh={onRefresh}
      refreshing={loading}
    />
  )
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#E7E5E4',
  },
  emptyContainer: {
    flexGrow: 1,
  },
})