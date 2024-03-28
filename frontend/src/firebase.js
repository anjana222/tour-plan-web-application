import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACBbzeTTUHTCg7S-AICaWachZjLlW2LIQ",
  authDomain: "TourVista-c895d.firebaseapp.com",
  projectId: "TourVista-c895d",
  storageBucket: "TourVista-c895d.appspot.com",
  messagingSenderId: "327618339399",
  appId: "1:327618339399:web:f37afeb0c79f05b2884762",
  measurementId: "G-NEJL6SBXR9"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const auth = getAuth(app);

export default auth;