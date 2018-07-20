import firebase from 'firebase/app'
import 'firebase/database';
import 'firebase/storage';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

export const databaseRef = firebase.database().ref();
export const storageRef = firebase.storage().ref();

export default firebase;
