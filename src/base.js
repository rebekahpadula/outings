import Rebase from 're-base';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC8JOtIkuJP1RoZeGaaYBhdO-fNoISLLnU",
    authDomain: "outings-230e4.firebaseapp.com",
    databaseURL: "https://outings-230e4.firebaseio.com",
    projectId: "outings-230e4",
    storageBucket: "outings-230e4.appspot.com",
    messagingSenderId: "997805673311"
  };

  const app = firebase.initializeApp(config);

  const base = Rebase.createClass(app.database());

  const facebookProvider = new firebase.auth.FacebookAuthProvider();

  export { app, base, facebookProvider }
