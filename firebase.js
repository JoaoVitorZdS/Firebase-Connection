// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy_VFfxAgSQVW3xPwe9H0WZN8AuuMm5t0",
  authDomain: "mercadoapp-5c5d0.firebaseapp.com",
  databaseURL: "https://mercadoapp-5c5d0-default-rtdb.firebaseio.com",
  projectId: "mercadoapp-5c5d0",
  storageBucket: "mercadoapp-5c5d0.appspot.com",
  messagingSenderId: "33406065441",
  appId: "1:33406065441:web:35d8e2a68e886c256cbc60",
  measurementId: "G-DP7D88D3PZ",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
