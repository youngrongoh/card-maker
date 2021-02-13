import firebaseApp from './firebase';

class Database {
  write(userId, data) {
    firebaseApp.database().ref(`${userId}/cards`).set(data);
  }
  async read(userId) {
    const ref = firebaseApp.database().ref(`${userId}/cards`);
    const snapshot = await ref.once('value');
    return snapshot.val();
  }
}

export default Database;
