import api_firebase from '@/config/api_firebase.json'

try {
  if (api_firebase === null) {
    throw new Error('api_firebase is null')
  }
} catch (error) {
  throw new Error(error)
}

export default api_firebase
