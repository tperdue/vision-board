
const visionBoardController = require('./vision-boards');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require("./service-key.json");
const cors = require('cors')({ origin: true });
const userController = require('./users');



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


exports.getUserBoards = functions.https.onRequest((request, response) => {

    const boards = [];
    return cors(request, response, async () => {
        const { userToken } = request.body;
        const decodedToken = await admin.auth().verifyIdToken(userToken);
        const uid = decodedToken.uid;
        const boardsSnapShot = await userController.getBoardByUserID(uid, firestore);
        boardsSnapShot.forEach(doc => {

            const boardObj = doc.data();
            boardObj.id = doc.id;
            boards.push(boardObj);
        })
        return response.json({
            boards
        })
    })
});

exports.deleteUserBoard = functions.https.onRequest((request, response) => {
    return cors(request, response, async () => {
        const { userToken, board } = request.body;
        const decodedToken = await admin.auth().verifyIdToken(userToken);
        const uid = decodedToken.uid;
        const docSnapShot = await userController.getSingleBoardByUserID(board.id, firestore);
        const doc = await docSnapShot.get();
        if (doc.exists && doc.data().uid === uid) {
            const deleteStatus = await docSnapShot.delete();
            return response.json({
                status: 'cool'
            })
        }

        else {
            return response.json({
                hasError: true
            })
        }



    })
})