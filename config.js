import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDv8q6HxeK3WXh99ooYUFZWkjs7r9zt2_M",
  authDomain: "mirifiques-7faa6.firebaseapp.com",
  projectId: "mirifiques-7faa6",
  storageBucket: "mirifiques-7faa6.appspot.com",
  messagingSenderId: "837241687215",
  appId: "1:837241687215:web:01390c43bfe64d1edf985a"
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}