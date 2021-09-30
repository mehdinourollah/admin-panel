// const baseUrl = "https://api.laroza.dev"

async function loginUser(credentials) {
 return fetch(`/admin/login`, {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export {
    loginUser
}
