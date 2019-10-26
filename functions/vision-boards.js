const saveBoard = async (board, firestore) => {

    const docRef = await firestore.collection('boards').add(board);

    return docRef.id;
}


module.exports = {
    saveBoard
}