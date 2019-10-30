const getBoardByUserID = async (uid, firestore) => {
    const querySnapShot = await firestore
        .collection('boards')
        .where('uid', '==', uid)
        .get()

    return querySnapShot;
}

module.exports = {
    getBoardByUserID
}