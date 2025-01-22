// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwzphVjjfH2BOzTn_qvysJpSJACsVyOow",
  authDomain: "myauthapp-b63ee.firebaseapp.com",
  projectId: "myauthapp-b63ee",
  storageBucket: "myauthapp-b63ee.firebasestorage.app",
  messagingSenderId: "607357825137",
  appId: "1:607357825137:web:d02a0562c1124a337a6bd0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

