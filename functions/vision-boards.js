const saveBoard = async (board, firestore) => {

    let docRef = null;
    const { id } = board
    delete board.id;
    if (id) {
        docRef = await firestore.collection('boards').doc(id).set(board)
    }

    else {
        docRef = await firestore.collection('boards').add(board);

    }



    return docRef.id;
}


const deleteBoard = async (params, firestore) => {

}

module.exports = {
    saveBoard
}