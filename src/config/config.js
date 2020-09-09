import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBu4dRIftmfQKQlNcdxQgdAkwzWIsX4-l0",
    authDomain: "clone-3f488.firebaseapp.com",
    databaseURL: "https://clone-3f488.firebaseio.com",
    projectId: "clone-3f488",
    storageBucket: "clone-3f488.appspot.com",
    messagingSenderId: "624203940266",
    appId: "1:624203940266:web:993eb0b1e30a827ed42bd3",
    measurementId: "G-4PCK822REP"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();

export { db, auth}
//   <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-analytics.js"></script>
