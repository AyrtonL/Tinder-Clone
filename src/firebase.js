import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDtVwOjND_Smpqk5rBxZN6ch-MN1OX1cUI",
    authDomain: "tinder-clone-525fb.firebaseapp.com",
    databaseURL: "https://tinder-clone-525fb.firebaseio.com",
    projectId: "tinder-clone-525fb",
    storageBucket: "tinder-clone-525fb.appspot.com",
    messagingSenderId: "799030061423",
    appId: "1:799030061423:web:adae13a396a29ba970209a",
    measurementId: "G-N029KYDLN5",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();
  
  export default database;