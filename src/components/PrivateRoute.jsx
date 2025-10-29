// // // src/components/PrivateRoute.jsx
// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function PrivateRoute({ children }) {
//     const { user } = useAuth();

//     if (!user) {
//         // Not logged in → redirect to login
//         return <Navigate to="/login" replace />;
//     }

//     // Logged in → render the dashboard
//     return children;
// }



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