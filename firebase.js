import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbR3u3ZozHSwYwkm5cX5ZATTNUqGYTGY8",
    authDomain: "bambam-b6fc4.firebaseapp.com",
    projectId: "bambam-b6fc4",
    storageBucket: "bambam-b6fc4.appspot.com",
    messagingSenderId: "697443444939",
    appId: "1:697443444939:web:c0da60ba6e681489e8d34e",
    measurementId: "G-PVDW2ZD595"
  };

  const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig) 
    : firebase.app(); 

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider};