import * as firebase from 'firebase';


  const config = {
    apiKey: "AIzaSyDaa9Le9kcX5Kq_kBH-5_ajgXXwGT33NOo",
    authDomain: "team-7-cfg.firebaseapp.com",
    databaseURL: "https://team-7-cfg.firebaseio.com",
    projectId: "team-7-cfg",
    storageBucket: "team-7-cfg.appspot.com",
    messagingSenderId: "827014861491"
  };
  
  firebase.initializeApp(config);


const database = firebase.database();
export {firebase, database as default};