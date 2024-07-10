const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyDdVLeO4Twqqt0hlowoIg9RlKl4iJfDR84",
  authDomain: "mostranstest.firebaseapp.com",
  projectId: "mostranstest",
  storageBucket: "mostranstest.appspot.com",
  messagingSenderId: "902921609253",
  appId: "1:902921609253:web:f6fd406013dc89ba579fcc"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Characters = db.collection("Characters");
module.exports = Characters;
