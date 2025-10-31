<<<<<<< HEAD
=======

>>>>>>> a89b0afcb9ac6f1634513546167c552d6b0da747



import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
    const { user } = useSelector((state) => state.auth);

    if (!user) {
        // Not logged in → redirect to login
        return <Navigate to="/login" replace />;
    }

    // Logged in → render the dashboard
    return children;
}
