import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
import {getStorage} from "firebase/storage"



const firebaseConfig = {
    apiKey: "AIzaSyBiAvK6HQwcgaN2NLsaMIv6EmjB-NNHQ0A",
    authDomain: "eduxll.firebaseapp.com",
    projectId: "eduxll",
    storageBucket: "eduxll.appspot.com",
    messagingSenderId: "118293747550",
    appId: "1:118293747550:web:cb53cd572812b49b0be1cf"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const db =  getFirestore(app)
  export const storage = getStorage(app)




