const saveBoard = async (board, firestore) => {

    let docRef = null;
    const { id } = board
    delete board.id;
    if (id) {
        docRef = await firestore.collection('boards').add(board);
    }

    else {

        docRef = firestore.collection('boards').doc(id).set(board)
    }



    return docRef.id;
}


module.exports = {
    saveBoard
}