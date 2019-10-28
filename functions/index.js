
const visionBoardController = require('./vision-boards');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require("./service-key.json");
const cors = require('cors')({ origin: true });



admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://vision-board-51991.firebaseio.com"
});

const firestore = admin.firestore();
firestore.settings({ timestampsInSnapshots: true });


exports.saveBoard = functions.https.onRequest((request, response) => {


    return cors(request, response, async () => {

        try {
            const board = request.body;
            console.log('saving board');
            const docRefId = await visionBoardController.saveBoard(board, firestore);
            response.json({
                hasError: false,
                docId: docRefId

            })
        }
        catch (error) {
            response.json({
                hasError: true,
                error
            })
        }




    })

})