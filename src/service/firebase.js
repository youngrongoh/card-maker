var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'business-card-maker-7521d.firebaseapp.com',
  databaseURL: 'https://business-card-maker-7521d.firebaseio.com',
  projectId: 'business-card-maker-7521d',
  storageBucket: 'business-card-maker-7521d.appspot.com',
  messagingSenderId: '467518096747',
  appId: '1:467518096747:web:e10e176361ff23e060b82e',
  measurementId: 'G-DL11QG9XQH',
};

class Firebase {
  constructor() {
    this.firebase = window.firebase;
    this.firebase.initializeApp(firebaseConfig);

    this.provider = new window.firebase.auth.GoogleAuthProvider();
  }

  signIn = () => {
    this.firebase.auth().signInWithRedirect(this.provider);
  };

  signOut = () => {
    this.firebase.auth().signOut();
  };

  getUser = async () => {
    return await this.firebase
      .auth()
      .getRedirectResult()
      .then((result) => {
        return result;
      });
  };
}

export default Firebase;
