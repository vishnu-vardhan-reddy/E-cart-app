import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCoDF58V6Q6hQJMalDcFE844ZUiRFuo3yY",
    authDomain: "fir-bebd8.firebaseapp.com",
    databaseURL: "https://fir-bebd8.firebaseio.com",
    projectId: "fir-bebd8",
    storageBucket: "fir-bebd8.appspot.com",
    messagingSenderId: "170151637162",
    appId: "1:170151637162:web:89a2c6466ac442e594a0d3",
    measurementId: "G-8DTT0GHN64"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth } ;