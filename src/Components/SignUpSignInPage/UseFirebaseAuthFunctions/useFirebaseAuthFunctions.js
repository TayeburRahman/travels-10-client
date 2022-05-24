import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, onAuthStateChanged, getIdToken } from "firebase/auth";
import firebaseConfig from '../FirebaseConfig/FirebaseConfig';
import { useLocation, useNavigate } from 'react-router-dom';


initializeApp(firebaseConfig);
const auth = getAuth();


const useFirebaseAuthFunctions = () => {
    const [isLoggedIn, SetIsLoggedIn] = useState({})
    const [errorMessage, setErrorMessage] = useState("")

    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';


    //* Sent error message
    const sentErrorMessage = () => {
        return errorMessage
    }


    //* Sign Up (Create) New User By (Email/Password)
    const createNewUserWithEmailAndPassword = async (email, password, retypePassword) => {
        createUserWithEmailAndPassword(auth, email, password, retypePassword)
            .then((userCredential) => {
                // Signed Up 
                const user = userCredential.user;
                console.log(user)
                verifyEmail()
                setErrorMessage("")
                navigate("/signin")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Sign In email and password Error Are :", errorCode, errorMessage)
                setErrorMessage(errorCode);
            });
    }


    //* Email Verification
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                alert("Sign Up Successfully! Please Activate Your Email")
            });
    }


    //* SignIn (Login) Authentication By (Email/Password)
    const signInEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const { displayName, email, photoURL, emailVerified } = user;
                const loggedInUser = {
                    name: displayName || "To Travelez",
                    email: email,
                    photo: photoURL,
                    emailVerified: emailVerified
                }
                console.log(displayName, email, photoURL, emailVerified);
                // console.log(user);
                if (user && user.emailVerified) {
                    SetIsLoggedIn(loggedInUser)
                    setErrorMessage("");
                    navigate(from, { replace: true });
                    // navigate('/')
                }
                else {
                    console.log("enter");
                    setErrorMessage("Check Email! Verify First")
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Sign In Error Are :", errorCode, errorMessage)
                setErrorMessage(errorCode);
            });
    }


    //* SignIn Authentication By (Google)
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // const user = result.user;
                // console.log(user);
                const { displayName, email, photoURL, emailVerified, uid } = result.user;
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    emailVerified: emailVerified,
                    uid: uid
                }
                // console.log(loggedInUser)
                SetIsLoggedIn(loggedInUser)
                navigate(from, { replace: true });
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log("Sign In Google Error Are:", errorCode, errorMessage, email, credential);
            });
    }

    //* Sign Out
    const SignOut = () => {
        signOut(auth)
            .then(() => {
                SetIsLoggedIn({})
                // console.log("Sign-out successful.");
            })
            .catch((error) => {
                console.log("Sign Out Error Are :", error);
            });
    }

    //* Reset Password 
    const resetPassword = () => {
        const email = isLoggedIn.email
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                alert("Reset Mail Sent Successfully")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }


    //* Get the currently signed-in user
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log(user);
                // User is signed in, see docs for a list of available properties
                // const uid = user.uid;
                // https://firebase.google.com/docs/reference/js/firebase.User
                getIdToken(user)
                    .then((idToken) => localStorage.setItem('idToken', idToken))
                SetIsLoggedIn(user)

            } else {
                // User is signed out
                SetIsLoggedIn({})
            }

            return () => unsubscribed
        });
    }, [])



    return {
        isLoggedIn,
        signInWithGoogle,
        SignOut,
        createNewUserWithEmailAndPassword,
        sentErrorMessage,
        signInEmailAndPassword,
        resetPassword
    }
}
export default useFirebaseAuthFunctions