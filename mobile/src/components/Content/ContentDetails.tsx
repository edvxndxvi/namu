import { Image, StyleSheet, Text, View } from 'react-native'
import type { ContentDetail } from '../../types'
import formatDuration from '../../utils/formatDuration'

interface ContentDetailsProps {
  content: ContentDetail
}

export default function ContentDetails({ content }: ContentDetailsProps) {
  const publishedAt = new Date(content.publishedAt).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const details = [
    { label: 'Tipo', value: content.type },
    { label: 'Duração', value: formatDuration(content.durationSeconds) },
    { label: 'Instrutor', value: content.instructor },
    { label: 'Publicado em', value: publishedAt },
  ]

  return (
    <View style={styles.container}>
      {content.thumbnailUrl ? (
        <Image source={{ uri: content.thumbnailUrl }} style={styles.image} />
      ) : (
        <View style={styles.image} />
      )}

      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Text style={styles.category}>{content.category}</Text>
        </View>
        <Text style={styles.title} >
          {content.title}
        </Text>
      </View>

      <View style={styles.details}>
        {details.map((item) => (
          <View key={item.label} style={styles.detailItem}>
            <Text style={styles.detailLabel}>{item.label}</Text>
            <Text style={styles.detailValue}>{item.value}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.description}>{content.description}</Text>
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
    backgroundColor: '#F5F5F4',
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
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
    overflow: 'hidden',
    backgroundColor: '#F0FDFA',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#0F766E',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1C1917',
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
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: '#78716C',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1C1917',
  },
  description: {
    fontSize: 16,
    color: '#44403C',
  },
})
