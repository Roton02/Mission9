import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWfJsgFMYWzk2eqTPSU26p019KtwPfRB8",
  authDomain: "lands-664a8.firebaseapp.com",
  projectId: "lands-664a8",
  storageBucket: "lands-664a8.appspot.com",
  messagingSenderId: "274628826343",
  appId: "1:274628826343:web:3031ba97ad8aef642ffe42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;
