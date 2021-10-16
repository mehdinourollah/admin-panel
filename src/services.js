import { post, get, handleResponse } from './util/fetchWrapper'

export const ping = async () => {
  return get(`/ping`)
}

export const loginUser = async (credentials) => {
  return post(`/login`, credentials)
}

export const loginAdmin = async (credentials) => {
  return post(`/admin/login`, credentials)
}

export const getRecipes = async (pageNumber,nPerPage) => {
  return get(`/recipe/?pageNumber=${pageNumber ?? 0}&nPerPage=${nPerPage ?? 10}`)
}


