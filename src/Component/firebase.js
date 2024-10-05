// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_8cUtPu8dui-2E-ukeJFpdnTiMwbr-Qo",
  authDomain: "netflix-gpt-74583.firebaseapp.com",
  projectId: "netflix-gpt-74583",
  storageBucket: "netflix-gpt-74583.appspot.com",
  messagingSenderId: "329145712041",
  appId: "1:329145712041:web:24174981c534bf3fe758b8",
  measurementId: "G-KVGX30GVHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();