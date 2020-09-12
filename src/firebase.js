// import firebase from "firebase";

//use only reqd librarires
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyBDwxmfXGESrgjtugqRIT-84uZUXLwUHLA",
    authDomain: "facebook-clone-71829.firebaseapp.com",
    databaseURL: "https://facebook-clone-71829.firebaseio.com",
    projectId: "facebook-clone-71829",
    storageBucket: "facebook-clone-71829.appspot.com",
    messagingSenderId: "36774996121",
    appId: "1:36774996121:web:9fb0ae8976cab00ecab008",
    measurementId: "G-GT4E5ZW8JF"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;

