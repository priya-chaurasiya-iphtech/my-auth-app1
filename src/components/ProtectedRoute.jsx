import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
    const { currentUser, isAuthenticated } = useAuth();
    const location = useLocation();
    
    console.log("ProtectedRoute Check:", { 
        currentUser, 
        isAuthenticated,
        path: location.pathname 
    });

    if (!currentUser || !isAuthenticated) {
        console.log("Not authenticated, redirecting to login");
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    console.log("User authenticated, allowing access");
    return children;
}