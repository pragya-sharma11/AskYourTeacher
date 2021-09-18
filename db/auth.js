  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDQaPNqysusFhTeS3Xno7M8hvEh8kkehjw",
    authDomain: "askyourteacher-3f248.firebaseapp.com",
    projectId: "askyourteacher-3f248",
    storageBucket: "askyourteacher-3f248.appspot.com",
    messagingSenderId: "904649944200",
    appId: "1:904649944200:web:3cb0af34d363d95434433d",
    measurementId: "G-X4NESL5W25"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  /**
   * npm install firebase
   * 
   * // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQaPNqysusFhTeS3Xno7M8hvEh8kkehjw",
  authDomain: "askyourteacher-3f248.firebaseapp.com",
  projectId: "askyourteacher-3f248",
  storageBucket: "askyourteacher-3f248.appspot.com",
  messagingSenderId: "904649944200",
  appId: "1:904649944200:web:3cb0af34d363d95434433d",
  measurementId: "G-X4NESL5W25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
   */

//npm install -g firebase-tools

//login to google
//firebase login

//initiate your project
//firebase init

//When you’re ready, deploy your web app
//firebase deploy