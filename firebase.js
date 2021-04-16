// Firebase App (the core Firebase SDK) is always required and must be listed first 
// Start of FireBase
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyCDuzirc5m7jvLfQlcw1pOXsC0s0Fg2J8A",
  authDomain: "xperiance-e2fd7.firebaseapp.com",
  projectId: "xperiance-e2fd7",
  storageBucket: "xperiance-e2fd7.appspot.com",
  messagingSenderId: "945190412173",
  appId: "1:945190412173:web:41990b52cd9e337756a7c4",
  measurementId: "G-RV1P34P93Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//end of firebase
