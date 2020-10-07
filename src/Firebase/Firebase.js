
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";


var firebaseConfig = {
    apiKey: "AIzaSyAmo79BBXOr5H2z3LtFfvSJL0vi0XX7baM",
    authDomain: "buyfy-484ac.firebaseapp.com",
    databaseURL: "https://buyfy-484ac.firebaseio.com",
    projectId: "buyfy-484ac",
    storageBucket: "buyfy-484ac.appspot.com",
    messagingSenderId: "1041501692809",
    appId: "1:1041501692809:web:5903f085bc5c8f6eb0f758"    
  };

  firebase.initializeApp(firebaseConfig);

export var auth = firebase.auth();
export var firestore = firebase.firestore(); 
export var googleProvider = new firebase.auth.GoogleAuthProvider();
//export var googleProvider = new firebase.auth.googleProvider();
export var serverTimeStamp = () => firebase.firestore.FieldValue.serverTimestamp();
export default firebase;