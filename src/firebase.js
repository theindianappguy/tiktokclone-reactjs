import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDB4XFQLn-iRxfA4gC8KqlAo1OfhHnRobk",
  authDomain: "tiktokclone-65934.firebaseapp.com",
  projectId: "tiktokclone-65934",
  storageBucket: "tiktokclone-65934.appspot.com",
  messagingSenderId: "392218868731",
  appId: "1:392218868731:web:9c99fb71bf8d8fc502a95e",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
