import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, deleteUser } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";


const auth = getAuth(app);
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(result => {
                // console.log(result);
            })
            .catch(error => {
                // console.log(error);
            })
    }

    const emailVerification = () => {
        setLoading(true);
        sendEmailVerification(auth.currentUser)
            .then(result => {
                // console.log(result);
            })
    }

    const uploadNameImageID = (name, photourl) => {
        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photourl
        }).then(result => {
            // console.log(result);
            setLoading(false);
        }).catch((error) => {
            // console.log(error);
            setLoading(false);
        });

    }

    const passwordReset = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // nothing to do...
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const dUser = () => {
        deleteUser(auth.currentUser)
            .then(() => {
            }).catch(() => {
            });
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user in the state', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])



    const userInfo = {
        user,
        loading,
        createUser,
        logIn,
        googleSignIn,
        logOut,
        emailVerification,
        uploadNameImageID,
        passwordReset,
        dUser,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;