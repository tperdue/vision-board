import { saveBoard } from './vision-boards';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require("./service-key.json");



admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://vision-board-51991.firebaseio.com"
});

const firestore = admin.firestore();
firestore.settings({ timestampsInSnapshots: true });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.saveBoard = functions.https.onRequest((request, response) => {
    const { board } = request.body;
    console.log('saving board');
    saveBoard(board);
    response.send('Board Saved');

})