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

//take user obj to store in DB
export const createUserProfileDocument = async( userAuth, additionalData) => {
  if(!userAuth){
    return;
  }

  // if exist query the document in firebase
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);

  // if exist create data
  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;

}

firebase.initializeApp(config);

// export this out
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });


export const loginWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;