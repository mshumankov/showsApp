import firebase from "firebase/app";
require("firebase/auth");

const fire = firebase.initializeApp({
  apiKey: "AIzaSyAzY5Gpet6DK6JI1_6eJFY_97f6TYlKNHU",
  authDomain: "shows-app-gump.firebaseapp.com",
  projectId: "shows-app-gump",
  storageBucket: "shows-app-gump.appspot.com",
  messagingSenderId: "39910470088",
  appId: "1:39910470088:web:5242f2fe0db24d3a2bd0fd",
  measurementId: "G-M35NMLYKKS",
});

export default fire;
