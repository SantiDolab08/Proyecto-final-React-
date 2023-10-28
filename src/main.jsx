import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { initializeApp } from "firebase/app";

// // const firebaseConfig = {
// //   apiKey: import.meta.env.VITE_FIRESTORE_API_KEY,
// //   authDomain: import.meta.env.VITE_FIRESTORE_AUTH_DOMAIN,
// //   projectId: import.meta.env.VITE_FIRESTORE_PROJECT_ID,
// //   storageBucket: import.meta.env.VITE_FIRESTORE_STORAGE_BUCKET,
// //   messagingSenderId: import.meta.env.VITE_FIRESTORE_MESSAGING_SENDER_ID,
// //   appId: import.meta.env.VITE_FIRESTORE_APP_ID,
// // };

const firebaseConfig = {
  apiKey: "AIzaSyA4DGwuUhcSBGPkiZBJRAffVY24Wsqrcq4",
  authDomain: "proyecto-final-react-6e48c.firebaseapp.com",
  projectId: "proyecto-final-react-6e48c",
  storageBucket: "proyecto-final-react-6e48c.appspot.com",
  messagingSenderId: "784297889037",
  appId: "1:784297889037:web:da00ee63bc2caf03d83444"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
