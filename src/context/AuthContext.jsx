

import React, { createContext, useContext, useState } from "react";

// Create AuthContext
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Signup function
    const signup = (form) => {
        const { username, firstName, lastName, email, phone, password } = form;
        // Save user info (no backend)
        const newUser = { username, firstName, lastName, email, phone, password };
        setUser(newUser);
        return { ok: true };
    };

    // Login function
    const login = (username) => {
        // Simple login check (for demo)
        if (username) {
            setUser({ ...user, username }); // keep other info if already signed up
            return { ok: true };
        }
        return { ok: false, message: "Invalid username" };
    };

    // Logout function
    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


