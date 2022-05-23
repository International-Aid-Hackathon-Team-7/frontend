import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/categories`


export const createCategory= async (category) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(category)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const getCategoryId = async (categoryId) => {
  try {
    const res = await fetch(`${BASE_URL}${categoryId}`,
    {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
    }})
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const createPost= async (categoryId, post) => {
  try {
    const res = await fetch(`${BASE_URL}${categoryId}/posts/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(post)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const getAllCategories = async () => {
  try {
    const res = await fetch(`${BASE_URL}`)
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const getAllPosts = async () => {
  try {
    const res = await fetch(`${BASE_URL}/posts`)
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const updateCategory = async (categoryId, category) => {
  try {
    const res = await fetch(`${BASE_URL}/${categoryId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(category)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}


export const getPostById = async (categoryId, postId) => {
  try {
    const res = await fetch(`${BASE_URL}/${categoryId}/posts/${postId}`,
    {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
    }})
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const createComment= async (categoryId, postId, comment) => {
  try {
    const res = await fetch(`${BASE_URL}/${categoryId}/posts/${postId}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(comment)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const deleteCategory = async (categoryId) => {
  try {
    await fetch(`${BASE_URL}/${categoryId}`, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
    })
  } catch (error) {
    throw error
  }
}

export const updatePost = async (categoryId, postId, post) => {
  try {
    const res = await fetch(`${BASE_URL}/${categoryId}/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(post)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const deletePost = async (categoryId, postId) => {
  try {
    await fetch(`${BASE_URL}${categoryId}/posts/${postId}`, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
    })
  } catch (error) {
    throw error
  }
}

export const updateComment = async (categoryId, postId, commentId, comment) => {
  try {
    const res = await fetch(`${BASE_URL}/${categoryId}/posts/${postId}/comments/${commentId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(comment)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const deleteComment = async (categoryId, postId, commentId) => {
  try {
    await fetch(`${BASE_URL}/${categoryId}/posts/${postId}/comments/${commentId}`, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
    })
  } catch (error) {
    throw error
  }
}