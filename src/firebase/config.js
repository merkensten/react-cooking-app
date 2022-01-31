import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB0eeWwnTzdz6Rle0myr4FyXZmtGHRijEQ',
  authDomain: 'cooking-ninja-site-53eed.firebaseapp.com',
  projectId: 'cooking-ninja-site-53eed',
  storageBucket: 'cooking-ninja-site-53eed.appspot.com',
  messagingSenderId: '945481103282',
  appId: '1:945481103282:web:6a85c94e121130fe33d6ab',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Srervices
const projectFirsestore = firebase.firestore();

export { projectFirsestore };
