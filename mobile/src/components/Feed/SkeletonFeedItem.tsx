import { View, StyleSheet } from 'react-native'

export default function SkeletonFeedItem() {
  return (
    <View style={styles.container}>
      <View style={styles.thumbnail} />

      <View style={styles.info}>
        <View style={styles.category} />
        <View style={styles.title} />
        <View style={styles.duration} />
      </View>
    </View>
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
    height: 12,
    width: 60,
    backgroundColor: '#E7E5E4',
  },
  title: {
    height: 16,
    width: '70%',
    backgroundColor: '#E7E5E4',
  },
  duration: {
    height: 14,
    width: 40,
    backgroundColor: '#E7E5E4',
  },
})
