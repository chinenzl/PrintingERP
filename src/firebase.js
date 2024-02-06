import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBz2t0-vNhV9F-bSqHYVomMctGRozzhzg",
  authDomain: "printingerp-bfa8b.firebaseapp.com",
  projectId: "printingerp-bfa8b",
  storageBucket: "printingerp-bfa8b.appspot.com",
  messagingSenderId: "472042638665",
  appId: "1:472042638665:web:0f0334323f814328405e98",
  measurementId: "G-SLWCKCQFCR"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore(); 