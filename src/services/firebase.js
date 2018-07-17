import firebase from 'firebase'
import 'firebase/database';
import firebaseConfig from '../firebaseConfig';

firebase.initializeApp(firebaseConfig);

export const databaseRef = firebase.database().ref();

export default firebase;
