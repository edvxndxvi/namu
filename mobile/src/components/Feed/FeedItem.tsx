import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import type { Content } from '../../types'
import formatDuration from '../../utils/formatDuration'

interface FeedItemProps {
  content: Content
}

export default function FeedItem({ content }: FeedItemProps) {
  const duration = formatDuration(content.durationSeconds)

  return (
    <TouchableOpacity
      onPress={() => {}}
      style={styles.container}
    >
      {content.thumbnailUrl ? (
        <Image source={{ uri: content.thumbnailUrl }} style={styles.thumbnail} />
      ) : (
        <View style={styles.thumbnail} />
      )}

      <View style={styles.info}>
        <Text style={styles.category}>{content.category}</Text>
        <Text style={styles.title} numberOfLines={2}>
          {content.title}
        </Text>
        <Text style={styles.duration}>{duration}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
  },
  thumbnail: {
    width: 72,
    height: 72,
    borderRadius: 12,
    backgroundColor: '#E7E5E4',
  },
  info: {
    flex: 1,
    gap: 4,
  },
  category: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#0F766E',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1917',
  },
  duration: {
    fontSize: 14,
    color: '#78716C',
  },
})