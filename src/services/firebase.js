// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";


let app = null;

const initialiseFirebaseApp = () => {
   // the app's Firebase configuration
   const firebaseConfig = {
      apiKey: import.meta.env.VITE_API_KEY,
      authDomain: import.meta.env.VITE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_APP_ID
   };

   app = initializeApp(firebaseConfig);

   return app;
}

const getApp = () => {
   return app === null ? initialiseFirebaseApp() : app;
}



export {
   initialiseFirebaseApp,
   getApp
};