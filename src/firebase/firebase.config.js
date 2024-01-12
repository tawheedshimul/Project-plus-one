import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
// };

const firebaseConfig = {
  apiKey: "AIzaSyBsFTsNaHcgd9goKtRMHySmW-Pk5_cqF7I",
  authDomain: "project-plus-a3206.firebaseapp.com",
  databaseURL: "https://project-plus-a3206-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-plus-a3206",
  storageBucket: "project-plus-a3206.appspot.com",
  messagingSenderId: "548044081622",
  appId: "1:548044081622:web:1eebb2da855f12beb9fc77"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);