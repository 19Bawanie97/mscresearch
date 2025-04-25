// Import necessary Firebase SDK modules
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics"; // Import isSupported
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBHJsY_G29T9g-Dk7N9qHa_NzOrrOP4s4",
  authDomain: "investmenthelper-debc5.firebaseapp.com",
  projectId: "investmenthelper-debc5",
  storageBucket: "investmenthelper-debc5.firebasestorage.app",
  messagingSenderId: "321484624104",
  appId: "1:321484624104:web:c08721e8aa2875a3ea795d",
  measurementId: "G-P9TRCPR4CG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication with persistence using AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Analytics if supported
let analytics = null;
if (isSupported()) {
  analytics = getAnalytics(app);
}

// Export the Firebase services
export { app, auth, db, analytics };
