import * as firebase from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';

import { browserLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.VITE_API_KEY,
  authDomain: process.env.VITE_AUTH_DOMAIN,
  projectId: process.env.VITE_PROJECTD_ID,
  storageBucket: process.env.VITE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_MESSAGING_SEND_ID,
  appId: process.env.VITE_APP_ID,
  measurementId: process.env.VITE_MEASUREMENT_ID,

};
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebaseAuth.initializeAuth(app, {
  persistence: browserLocalPersistence,
});
