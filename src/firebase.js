import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYSBg6cyjbPTwqhejT-EbgrrdWb58ZMoQ",
  authDomain: "clone-585c8.firebaseapp.com",
  projectId: "clone-585c8",
  storageBucket: "clone-585c8.appspot.com",
  messagingSenderId: "268478034814",
  appId: "1:268478034814:web:fa806b13244230fb08792f",
  measurementId: "G-4WSF20X8G7"
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {db, auth, provider}
