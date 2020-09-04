import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyC3Rz0CltuN9Mc8gUS-hbPXLznWKHjpIPY",
    authDomain: "crwn-clothing-f10ec.firebaseapp.com",
    databaseURL: "https://crwn-clothing-f10ec.firebaseio.com",
    projectId: "crwn-clothing-f10ec",
    storageBucket: "crwn-clothing-f10ec.appspot.com",
    messagingSenderId: "739035837565",
    appId: "1:739035837565:web:f899bf74e4a8eb93b3ad14",
    measurementId: "G-VWJHP1RZ74"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};

