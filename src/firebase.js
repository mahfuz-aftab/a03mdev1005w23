// firebase.js

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD74O6veKY5uD2DLX6B0dU08ayvjcuYccE",
  authDomain: "a3mdev1005w23.firebaseapp.com",
  projectId: "a3mdev1005w23",
  storageBucket: "a3mdev1005w23.appspot.com",
  messagingSenderId: "770522893504",
  appId: "1:770522893504:web:7cd661920bf192ae46b125"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
