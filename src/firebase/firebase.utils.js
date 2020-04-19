import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCeCwEnAyY2JVHNl5LScVd_q6ctMM1kTHs",
  authDomain: "giftshop-db.firebaseapp.com",
  databaseURL: "https://giftshop-db.firebaseio.com",
  projectId: "giftshop-db",
  storageBucket: "giftshop-db.appspot.com",
  messagingSenderId: "705414862069",
  appId: "1:705414862069:web:333355ca59d2a93ceae1bc",
  measurementId: "G-63ZE2XLKVJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
