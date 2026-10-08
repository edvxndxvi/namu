import { useCallback, useState } from "react";

export default function useFetch<T>() {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const request = useCallback(async (url: string, options: RequestInit) => {
        try {
            setError('')
            setLoading(true)

            const response = await fetch(url, options)
            const json = await response.json()

            if(!response.ok) {
                throw new Error(json.error)
            }

            setData(json)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erro inesperado')
        } finally {
            setLoading(false)
        }
    }, [])

    return { data, loading, error, request }
}