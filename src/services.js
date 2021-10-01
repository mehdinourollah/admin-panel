
export const loginUser = async (credentials) => {
  return post(`/login`, credentials)
}

export const loginAdmin = async (credentials) => {
  return post(`/admin/login`, credentials)
}

