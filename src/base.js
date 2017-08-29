import Rebase from 're-base';
import firebase from 'firebase';
import config from './config';

  const app = firebase.initializeApp(config);

  const base = Rebase.createClass(app.database());

  const facebookProvider = new firebase.auth.FacebookAuthProvider();

  export { app, base, facebookProvider }