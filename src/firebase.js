import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAvGShyzAZA2WW15P6VevZB1lSpe7KZ9WY",
    authDomain: "linkedin-69eb7.firebaseapp.com",
    projectId: "linkedin-69eb7",
    storageBucket: "linkedin-69eb7.appspot.com",
    messagingSenderId: "955925108704",
    appId: "1:955925108704:web:d148a43729c21c51477d85"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth};