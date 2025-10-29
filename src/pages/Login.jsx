

// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import "./Auth.css"; // Shared CSS with Signup/Forgot

// export default function Login() {
//     const { login } = useAuth();
//     const navigate = useNavigate();
//     const [form, setForm] = useState({ username: "", password: "" });
//     const [error, setError] = useState("");

//     const handleChange = (e) =>
//         setForm({ ...form, [e.target.name]: e.target.value });

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!form.username || !form.password) {
//             setError("Please fill all fields");
//             return;
//         }

//         // Call login from context
//         login(form.username); // pass username only
//         navigate("/dashboard/home"); // go to dashboard
//     };

//     return (
//         <div className="auth-container">
//             {/* Left image - Mobile Related */}
//             <div className="auth-image">
//                 <img
//                     src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
//                     alt="Mobile Login"
//                 />
//                 <div className="image-overlay">
//                     <h3>Welcome to MyPhoneHub</h3>
//                     <p>Your ultimate destination for mobile technology and innovation</p>
//                 </div>
//             </div>

//             {/* Right form */}
//             <div className="auth-form">
//                 <div className="form-header">
//                     <h2>Welcome Back</h2>
//                     <p>Sign in to your account</p>
//                 </div>

//                 {error && <div className="error">{error}</div>}

//                 <form onSubmit={handleSubmit}>
//                     <div className="input-group">
//                         <input
//                             type="text"
//                             name="username"
//                             placeholder="Username"
//                             value={form.username}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="input-group">
//                         <input
//                             type="password"
//                             name="password"
//                             placeholder="Password"
//                             value={form.password}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <button type="submit" className="login-btn">Login</button>
//                 </form>

//                 <div className="auth-links">
//                     <Link to="/forgot-password" className="link">Forgot Password?</Link>
//                     <span>Don't have an account? <Link to="/signup" className="link">Sign up</Link></span>
//                 </div>

//                 <div className="social-login">
//                     <div className="divider">
//                         <span>Or continue with</span>
//                     </div>
//                     <div className="social-buttons">
//                         <button className="social-btn google">
//                             <span>Google</span>
//                         </button>
//                         <button className="social-btn facebook">
//                             <span>Facebook</span>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { login } from "../store/slices/authSlice";

// export default function Login() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleLogin = (e) => {
//         e.preventDefault();
//         if (username && password) {
//             dispatch(login({ username }));
//             navigate("/dashboard/home");
//         } else {
//             alert("Please fill all fields");
//         }
//     };

//     return (
//         <div className="auth-container">
//             <div className="auth-header">
//                 <h1 className="auth-title">Welcome Back</h1>
//                 <p className="auth-subtitle">Sign in to your account</p>
//             </div>

//             <form onSubmit={handleLogin} className="auth-form">
//                 <div className="form-group">
//                     <label className="form-label">Username</label>
//                     <input
//                         type="text"
//                         placeholder="Enter your username"
//                         value={username}
//                         onChange={e => setUsername(e.target.value)}
//                         className="form-input"
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label className="form-label">Password</label>
//                     <input
//                         type="password"
//                         placeholder="Enter your password"
//                         value={password}
//                         onChange={e => setPassword(e.target.value)}
//                         className="form-input"
//                         required
//                     />
//                 </div>

//                 <button type="submit" className="auth-button">Sign In</button>

//                 <div className="auth-links">
//                     <Link to="/forgot-password">Forgot password?</Link>
//                     <Link to="/signup">Don't have an account? Sign up</Link>
//                 </div>
//             </form>
//         </div>
//     );
// }
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slices/authSlice";
import "./Auth.css";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isAuthenticated, error: authError } = useSelector((state) => state.auth);

    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        if (!form.email || !form.password) {
            setError("Please fill all fields");
            setLoading(false);
            return;
        }

        // Call login from Redux
        dispatch(login({
            email: form.email,
            password: form.password
        }));

        setLoading(false);
    };

    // Redirect if user is authenticated
    useEffect(() => {
        if (isAuthenticated && user) {
            navigate("/dashboard/home");
        }

        if (authError) {
            setError(authError);
        }
    }, [isAuthenticated, user, authError, navigate]);

    return (
        <div className="auth-container">
            {/* Left image - Mobile Related */}
            <div className="auth-image">
                <img
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                    alt="Mobile Login"
                />
                <div className="image-overlay">
                    <h3>Welcome to MyPhoneHub</h3>
                    <p>Your ultimate destination for mobile technology and innovation</p>
                </div>
            </div>

            {/* Right form */}
            <div className="auth-form">
                <div className="form-header">
                    <h2>Welcome Back</h2>
                    <p>Sign in to your account</p>
                </div>

                {error && <div className="error">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={handleChange}
                            disabled={loading}
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={handleChange}
                            disabled={loading}
                        />
                    </div>
                    <button
                        type="submit"
                        className={`login-btn ${loading ? 'loading' : ''}`}
                        disabled={loading}
                    >
                        {loading ? "Signing In..." : "Login"}
                    </button>
                </form>

                <div className="auth-links">
                    <Link to="/forgot-password" className="link">Forgot Password?</Link>
                    <span>Don't have an account? <Link to="/signup" className="link">Sign up</Link></span>
                </div>

                <div className="social-login">
                    <div className="divider">
                        <span>Or continue with</span>
                    </div>
                    <div className="social-buttons">
                        <button className="social-btn google">
                            <span>Google</span>
                        </button>
                        <button className="social-btn facebook">
                            <span>Facebook</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}