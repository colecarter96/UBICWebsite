// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBeq_6ig_-nPI1_l5iq9M3JTQ-bKD8BPQM",
//   authDomain: "ubic-website-cole.firebaseapp.com",
//   databaseURL: "https://ubic-website-cole-default-rtdb.firebaseio.com",
//   projectId: "ubic-website-cole",
//   storageBucket: "ubic-website-cole.firebasestorage.app",
//   messagingSenderId: "442880795135",
//   appId: "1:442880795135:web:a8df328447dd5d9fc5c7ca",
//   measurementId: "G-9PYW451J36"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCEcSLDIlxHCqgbmoKogBgg75qdTGcQJks",
  authDomain: "ubic-firebase.firebaseapp.com",
  projectId: "ubic-firebase",
  storageBucket: "ubic-firebase.firebasestorage.app",
  messagingSenderId: "533170374343",
  appId: "1:533170374343:web:1bffdf242ac9b7b6f4a0e2",
  measurementId: "G-X5GJJV4BQT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

// const storageRef = ref(storage, 'images/myImage.jpg');
