import firebase from 'firebase/app';
import 'firebase/firestore';



const config = {
    apiKey: "AIzaSyCRPovKA1wK72puzf_ia8nDeXmS6EeQKps",
    authDomain: "vision-board-51991.firebaseapp.com",
    databaseURL: "https://vision-board-51991.firebaseio.com",
    projectId: "vision-board-51991",
    storageBucket: "vision-board-51991.appspot.com",
    messagingSenderId: "818423804592",
    appId: "1:818423804592:web:de12cc924cec4974ad8175",
    measurementId: "G-6FM29G66GY"
};
const settings = { timestampsInSnapshots: true };


firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;