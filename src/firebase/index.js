
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC9CGpy5jrfLsSCnVX5x5Ace2z4m-Uje4E",
  authDomain: "vue-school-proj.firebaseapp.com",
  projectId: "vue-school-proj",
  storageBucket: "vue-school-proj.appspot.com",
  messagingSenderId: "707856582824",
  appId: "1:707856582824:web:13369ee4461218867e9a9d"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    db
}