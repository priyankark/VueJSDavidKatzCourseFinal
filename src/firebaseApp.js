
 
 import firebase from 'firebase';

 // Initialize Firebase copy config from console
 const config={

 };

export const firebaseApp=firebase.initializeApp(config);
export const eventsRef= firebaseApp.database().ref().child('events');
