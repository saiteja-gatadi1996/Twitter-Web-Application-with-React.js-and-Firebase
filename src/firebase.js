import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBfVq_yb_MeDq7DZkdSCl_E02OOvWL4dFc",
    authDomain: "twitter-app-73cd9.firebaseapp.com",
    databaseURL: "https://twitter-app-73cd9.firebaseio.com",
    projectId: "twitter-app-73cd9",
    storageBucket: "twitter-app-73cd9.appspot.com",
    messagingSenderId: "460670242266",
    appId: "1:460670242266:web:92f3e70e8c34748c5804e3",
    measurementId: "G-86V7W5NDQ9"
  };

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();

export default db;