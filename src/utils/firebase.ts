import * as firebase from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';

import { browserLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECTD_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SEND_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,

};
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebaseAuth.initializeAuth(app, {
  persistence: browserLocalPersistence
});
