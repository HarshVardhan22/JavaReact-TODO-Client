  // Your web app's Firebase configuration
  import  firebase from "firebase/app";
  import "firebase/database";
  var firebaseConfig = {
    apiKey: "AIzaSyDgk2ser_gaaPSndNDIeD494GqE8Ntneag",
    authDomain: "reacttodo-df1db.firebaseapp.com",
    databaseURL: "https://reacttodo-df1db-default-rtdb.firebaseio.com",
    projectId: "reacttodo-df1db",
    storageBucket: "reacttodo-df1db.appspot.com",
    messagingSenderId: "984406975646",
    appId: "1:984406975646:web:f6e266a0015e95dc37078f"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();