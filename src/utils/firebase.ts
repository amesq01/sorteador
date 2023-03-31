import * as firebase from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';

import { browserLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDBl_eu3QrIXtB8fNX5VE_tRJCRnXkcKoA',
  authDomain: 'sorteador-jurados.firebaseapp.com',
  projectId: 'sorteador-jurados',
  storageBucket: 'sorteador-jurados.appspot.com',
  messagingSenderId: '203981270022',
  appId: '1:203981270022:web:28a2c4d0340716bfc0e787',
  measurementId: 'G-HQEB3JWWZ8',

};
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebaseAuth.initializeAuth(app, {
  persistence: browserLocalPersistence,
});
