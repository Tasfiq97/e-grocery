
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAaPJWwYcIdMedoX68t0cWB23h9VbSJedU",
  authDomain: "new-task-project-9b1a7.firebaseapp.com",
  projectId: "new-task-project-9b1a7",
  storageBucket: "new-task-project-9b1a7.appspot.com",
  messagingSenderId: "506561591692",
  appId: "1:506561591692:web:df760e1cc8cdb595ae7ea9"
};  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;