import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    firebaseApp.auth().signOut();
  }

  onAuthChange(onAuthChanged) {
    firebase.auth().onAuthStateChanged((user) => onAuthChanged(user));
  }
}

export default AuthService;
