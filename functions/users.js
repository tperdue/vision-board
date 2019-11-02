const getBoardByUserID = async (uid, firestore) => {
    const querySnapShot = await firestore
        .collection('boards')
        .where('uid', '==', uid)
        .get()

    return querySnapShot;
}

const getSingleBoardByUserID = async (boardId, firestore) => {

    const docSnapShot = await firestore.collection('boards').doc(boardId);
    return docSnapShot;
}

module.exports = {
    getBoardByUserID,
    getSingleBoardByUserID
}