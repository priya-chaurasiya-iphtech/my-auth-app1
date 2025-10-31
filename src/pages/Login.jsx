

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
                        className={`signup-btn ${loading ? 'loading' : ''}`}
                        disabled={loading}
                    >
                        {loading ? "Login..." : "Login"}
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
<<<<<<< HEAD

=======
>>>>>>> a89b0afcb9ac6f1634513546167c552d6b0da747
