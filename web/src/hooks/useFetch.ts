import { useCallback, useState } from 'react'

export default function useFetch<T>() {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const request = useCallback(async (url: string, options: RequestInit) => {
    try {
      setError('')
      setLoading(true)

      const response = await fetch(url, options)
      const text = await response.text()
      const json = text ? JSON.parse(text) : null

      if (!response.ok) {
        throw new Error(json?.error || 'Erro na requisição')
      }

      setData(json)
      return true
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro inesperado')
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  return { data, loading, error, request }
}
