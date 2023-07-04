import { initializeApp } from "firebase/app";
import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGEBUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
} from "@env";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
console.log(FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: "AIzaSyAfQ9q5ZPisQL_T2E0r43B-ckOgF577gLI",
  authDomain: "convene-dca77.firebaseapp.com",
  projectId: "convene-dca77",
  storageBucket: "convene-dca77.appspot.com",
  messagingSenderId: "530186137942",
  appId: "1:530186137942:web:6d8c22dbb80cc7750066f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(app);

export { auth, db };
