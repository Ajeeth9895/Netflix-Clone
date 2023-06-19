import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDDC8AV3zDaTtpxkh2z_cN4kVEmpnL8yMA",
    authDomain: "netflix-clone-b4b67.firebaseapp.com",
    projectId: "netflix-clone-b4b67",
    storageBucket: "netflix-clone-b4b67.appspot.com",
    messagingSenderId: "115387159502",
    appId: "1:115387159502:web:cef181de7c8c27a653919f"
};

//to use firebase services in application
const app = initializeApp(firebaseConfig);

//to provide authentication
const auth = getAuth();

//let your users authenticate with Firebase using their Google Accounts
const provider = new GoogleAuthProvider();

export { auth, provider, app };