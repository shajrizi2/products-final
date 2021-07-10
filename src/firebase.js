import  firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
  
    apiKey: "AIzaSyDOkHUUqM3z1ottERELzM87ZGVxRmY14Ek",
    authDomain: "myproducts-f21c2.firebaseapp.com",
    projectId: "myproducts-f21c2",
    storageBucket: "myproducts-f21c2.appspot.com",
    messagingSenderId: "621545775826",
    appId: "1:621545775826:web:7692696faa407e467b430b"
  
});



 const db = firebase.firestore();
 

export default db;