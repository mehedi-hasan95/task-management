import React, { createContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AuthContext = createContext();
const queryClient = new QueryClient();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // Create user with Email
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // Update User
    const updateUser = (userInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo);
    };

    // User Login
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Login with Gmail
    const googleLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // Sign Out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // state observer

    useEffect(() => {
        const usSubscribed = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => usSubscribed();
    }, []);

    const authInfo = {
        user,
        createUser,
        updateUser,
        logIn,
        googleLogin,
        logOut,
        loading,
    };
    return (
        <QueryClientProvider client={queryClient}>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </QueryClientProvider>
    );
};

export default AuthProvider;
