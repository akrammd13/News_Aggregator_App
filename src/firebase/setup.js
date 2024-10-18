import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkGASxre2zLtmkvKs3QwMtAasyq2OXjs8",
  authDomain: "newapp-97ad2.firebaseapp.com",
  projectId: "newapp-97ad2",
  storageBucket: "newapp-97ad2.appspot.com",
  messagingSenderId: "497085434752",
  appId: "1:497085434752:web:8a1054ef2e6589fa1c4f65"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)