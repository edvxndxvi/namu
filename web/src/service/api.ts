import { API_URL } from '../config'

export function GET_CATEGORIES() {
  return {
    url: `${API_URL}/categories`,
    options: {
      method: 'GET',
    },
  }
}
export function GET_CONTENTS({ category }: { category: string }) {
  return {
    url: `${API_URL}/contents?category=${category}`,
    options: {
      method: 'GET',
    },
  }
}

export function GET_CONTENT_BY_ID(id: number) {
  return {
    url: `${API_URL}/contents/${id}`,
    options: {
      method: 'GET',
    },
  }
}

export function GET_FAVORITES() {
  return {
    url: `${API_URL}/favorites`,
    options: {
      method: 'GET',
    },
  }
}

export function POST_FAVORITE(id: number) {
  return {
    url: `${API_URL}/favorites`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    body: JSON.stringify({ id }),
  }
}

export function DELETE_FAVORITE(id: number) {
  return {
    url: `${API_URL}/favorites/${id}`,
    options: {
      method: 'DELETE',
    },
  }
}
