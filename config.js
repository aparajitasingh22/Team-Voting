import firebase from 'firebase';

  var firebaseConfig = {
    //paste your SDK here
     apiKey: "AIzaSyDq5Y0ohUrQbR67e_bD3s8obACrnYtbAvg",
  authDomain: "election-eb9f2.firebaseapp.com",
  databaseURL: "https://election-eb9f2-default-rtdb.firebaseio.com",
  projectId: "election-eb9f2",
  storageBucket: "election-eb9f2.appspot.com",
  messagingSenderId: "491876799108",
  appId: "1:491876799108:web:7e4e500ac2de78d9bc28d1"


    
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();