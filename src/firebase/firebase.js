import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBk7y3kuPjUgkjF2xjd6-q6ZdWkMY9Y3z4",
  authDomain: "spotify-clone-1e4fa.firebaseapp.com",
  projectId: "spotify-clone-1e4fa",
  storageBucket: "spotify-clone-1e4fa.appspot.com",
  messagingSenderId: "45106839484",
  appId: "1:45106839484:web:4beeb271c2dc8ab75c35b9",
  measurementId: "G-BM3B2NG90Y",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
