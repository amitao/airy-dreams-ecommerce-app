import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyDC8m1YlnINchXfUSTfQdschi2d1AT6QS0",
  authDomain: "dream-db.firebaseapp.com",
  databaseURL: "https://dream-db.firebaseio.com",
  projectId: "dream-db",
  storageBucket: "dream-db.appspot.com",
  messagingSenderId: "839193253307",
  appId: "1:839193253307:web:1bea90b0042f1d8acae09e",
  measurementId: "G-98K4FPW5MT"
}

firebase.initializeApp(config);

// export this out
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });


export const loginWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;