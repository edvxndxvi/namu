import { View, StyleSheet } from 'react-native'

export default function SkeletonContentDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.image} />

      <View style={styles.header}>
        <View style={styles.headerRow}>
          <View style={styles.category} />
        </View>
        <View style={styles.title} />
      </View>

      <View style={styles.details}>
        {[...Array(4)].map((_, index) => (
          <View key={index} style={styles.detailItem}>
            <View style={styles.detailLabel} />
            <View style={styles.detailValue} />
          </View>
        ))}
      </View>

      <View style={styles.description} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 16,
    backgroundColor: '#E7E5E4',
  },
  header: {
    gap: 12,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  category: {
    width: 50,
    borderRadius: 999,
    overflow: 'hidden',
    backgroundColor: '#E7E5E4',
  },
  title: {
    width: '60%',
    height: 34,
    borderRadius: 8,
    backgroundColor: '#E7E5E4',
  },
  details: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 20,
    paddingVertical: 24,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E7E5E4',
  },
  detailItem: {
    width: '50%',
    gap: 4,
  },
  detailLabel: {
    width: '40%',
    height: 12,
    borderRadius: 4,
    backgroundColor: '#E7E5E4',
  },
  detailValue: {
    width: '60%',
    height: 16,
    borderRadius: 4,
    backgroundColor: '#E7E5E4',
  },
  description: {
    width: '100%',
    height: 24,
    borderRadius: 8,
    backgroundColor: '#E7E5E4',
  },
})
