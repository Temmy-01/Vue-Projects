import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAjs0ueg-h9M90Bf3trjLu0Z8Hbrayxirg",
    authDomain: "chatapp-178ba.firebaseapp.com",
    projectId: "chatapp-178ba",
    storageBucket: "chatapp-178ba.appspot.com",
    messagingSenderId: "4398326083",
    appId: "1:4398326083:web:a21243dd049a8e2ac08ff6"
  };
  
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);

  export default app;