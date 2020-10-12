import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAsjKeealnJLQm53z4Ww45O1pRFw7ox0sI",
  authDomain: "clone-f6ef6.firebaseapp.com",
  databaseURL: "https://clone-f6ef6.firebaseio.com",
  projectId: "clone-f6ef6",
  storageBucket: "clone-f6ef6.appspot.com",
  messagingSenderId: "319182139153",
  appId: "1:319182139153:web:90f6904701b2c7af20a6b0",
  measurementId: "G-82QPEF5WN7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
