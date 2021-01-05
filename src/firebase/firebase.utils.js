import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBucV4pgerlQxx-fQ7tC4s7kLVMCpFs8gg",
  authDomain: "auth1-da02f.firebaseapp.com",
  databaseURL: "https://auth1-da02f.firebaseio.com",
  projectId: "auth1-da02f",
  storageBucket: "auth1-da02f.appspot.com",
  messagingSenderId: "196978362365",
  appId: "1:196978362365:web:9ac42fbc7a2752984dfb94",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
