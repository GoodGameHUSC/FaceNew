import firebase from 'firebase';
const fireApp = firebase.initializeApp({
  apiKey: "AIzaSyBpuSu0TIGhdQrhnLChVKlo8OREECUShcg",
  authDomain: "mycognitivedemo.firebaseapp.com",
  databaseURL: "https://mycognitivedemo.firebaseio.com",
  projectId: "mycognitivedemo",
  storageBucket: "mycognitivedemo.appspot.com",
  messagingSenderId: "455463218396",
  appId: "1:455463218396:web:02bd37b32e05703efe9819"
})

export default fireApp;