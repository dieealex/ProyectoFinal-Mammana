import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiloswYYWpHx3zTIqcmo_VLRvnLgqhjzs",
  authDomain: "futbol-store.firebaseapp.com",
  projectId: "futbol-store",
  storageBucket: "futbol-store.firebasestorage.app",
  messagingSenderId: "919890698807",
  appId: "1:919890698807:web:06b142c733afb249b2d5b2",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Firestore
export const db = getFirestore(app);