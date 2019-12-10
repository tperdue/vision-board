import * as firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAVgu4jF_fP8Y27lD-Gq4WLeghuXnircOs",
  authDomain: "vision-board-3.firebaseapp.com",
  databaseURL: "https://vision-board-3.firebaseio.com",
  projectId: "vision-board-3",
  storageBucket: "vision-board-3.appspot.com",
  messagingSenderId: "316523167433",
  appId: "1:316523167433:web:f18c2ce5565c23869b1718"
  };


  firebase.initializeApp(firebaseConfig);

  export default firebase;


  
