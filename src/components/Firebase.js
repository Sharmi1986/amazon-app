import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-CWtjIXWmr8FPpXKy8hiHJttB7GxtD4g",
    authDomain: "clone-f9baa.firebaseapp.com",
    projectId: "clone-f9baa",
    storageBucket: "clone-f9baa.appspot.com",
    messagingSenderId: "1016515343090",
    appId: "1:1016515343090:web:f225ab6c435a2a81cf966b",
    measurementId: "G-KFBQRZWW24"
  };

  const app = initializeApp(firebaseConfig);

  // Get Firestore and Auth instances
  const db = getFirestore(app);
  const auth = getAuth(app);
  
  // Export the instances
  export { db, auth };
