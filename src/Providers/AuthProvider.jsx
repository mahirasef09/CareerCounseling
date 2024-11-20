import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { toast } from "react-toastify";

const auth = getAuth(app);
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [authState, setAuthState] = useState(false);
    const [loading, setLoading] = useState(true);

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInUserWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const userLogout = () => {
        setLoading(true);
        toast("Log Out Successful");
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unSubscribe();
        }
    }, [authState])

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    const handleForgotPassword = (emailAddress) => {
        if (!emailAddress) {
            toast("Please provide a valid email address");
        }

        else {
            sendPasswordResetEmail(auth, emailAddress)
            .then(()=>{
                toast("Password Reset email sent, please check your email");
            })
        }
    }


    const authInfo = {
        user,
        setUser,
        createNewUser,
        userLogin,
        signInUserWithGoogle,
        userLogout,
        loading,
        updateUserProfile,
        handleForgotPassword,
        userEmail,
        setUserEmail,
        authState,
        setAuthState
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;