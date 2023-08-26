import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZffeE0wrpop29y3jix_A4xxm5QgzrhLY",
  authDomain: "uolkut-c23e6.firebaseapp.com",
  projectId: "uolkut-c23e6",
  storageBucket: "uolkut-c23e6.appspot.com",
  messagingSenderId: "888342063801",
  appId: "1:888342063801:web:862222b6ecede5f7728968",
  measurementId: "G-0G8SCETRQN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
