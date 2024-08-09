// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBG69eM9SCo4_kAYZiigej1NWLNx2bxzc",
  authDomain: "otpsample-b209d.firebaseapp.com",
  projectId: "otpsample-b209d",
  storageBucket: "otpsample-b209d.appspot.com",
  messagingSenderId: "205372826885",
  appId: "1:205372826885:web:c8fb80765699e5decb036c",
  measurementId: "G-00S4ZS6ZQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Disable app verification for testing
auth.settings.appVerificationDisabledForTesting = true;
