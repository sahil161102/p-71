import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyC_4oLVrHiSNlFnQNlHAyGjfjbS-aEADoI",
    authDomain: "rider-d14f5.firebaseapp.com",
    projectId: "rider-d14f5",
    storageBucket: "rider-d14f5.appspot.com",
    messagingSenderId: "469554942200",
    appId: "1:469554942200:web:2251526078e34a82482b0d"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
