
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBKlqhH4We1_hcqwU8gLgQKyPNCRxqxkRc",
  authDomain: "disney-plus-clone-633ea.firebaseapp.com",
  projectId: "disney-plus-clone-633ea",
  storageBucket: "disney-plus-clone-633ea.appspot.com",
  messagingSenderId: "227798168856",
  appId: "1:227798168856:web:1ca71a6402d91875c79a6d"
};

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
