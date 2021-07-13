import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDmpIu8ynSBxjG3lNmJ5fw-7dw8IrfauLo",
    authDomain: "pmp-progress-managment-portal.firebaseapp.com",
    projectId: "pmp-progress-managment-portal",
    storageBucket: "pmp-progress-managment-portal.appspot.com",
    messagingSenderId: "70835243137",
    appId: "1:70835243137:web:e1ab2906994f6769806580"
  };

// initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;