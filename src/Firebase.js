import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

firebase.initializeApp({
    apiKey: "AIzaSyCjKfDpNUDGRYZGEdvum5w0MIgAQJ6shrw",
    authDomain: "belote-io.firebaseapp.com",
    projectId: "belote-io",
    storageBucket: "belote-io.appspot.com",
    messagingSenderId: "1061430600289",
    appId: "1:1061430600289:web:e81290748d6291e9a8c020",
    measurementId: "G-30C8XG3HCB"
});

const auth = firebase.auth;
const firestore = firebase.firestore;

export default firebase;
export { auth, firestore };
