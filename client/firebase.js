import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBXHS4bnHr4NEdQEmWFYi8sRRj-XP4xNMg",
  authDomain: "rooomdekho.firebaseapp.com",
  projectId: "rooomdekho",
  storageBucket: "rooomdekho.appspot.com",
  messagingSenderId: "843991950165",
  appId: "1:843991950165:web:35bc7369b9b0e0ed6c85dc",
  measurementId: "G-TW0QDMPMFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);