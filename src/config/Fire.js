import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCAAYcmg_SdmYtSlapthCi6nZiUPwMe6C4",
    authDomain: "eskarbnik-49765.firebaseapp.com",
    databaseURL: "https://eskarbnik-49765.firebaseio.com",
    projectId: "eskarbnik-49765",
    storageBucket: "eskarbnik-49765.appspot.com",
    messagingSenderId: "706387982163"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });
  
  export default firebase;