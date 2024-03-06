import firebaseConfig from '../firebase/db'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

let data = null
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default data = {
  db,
  collection,
  addDoc
}
