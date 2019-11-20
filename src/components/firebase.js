import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCcJnAyg85ZiMVQ5e7O5gOwhlL2oa2XDqw",
    authDomain: "get-things-d0ne.firebaseapp.com",
    databaseURL: "https://get-things-d0ne.firebaseio.com",
    projectId: "get-things-d0ne",
    storageBucket: "get-things-d0ne.appspot.com",
    messagingSenderId: "299708658490",
    appId: "1:299708658490:web:100fdeab4be9b554a89603"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;