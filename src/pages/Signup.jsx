
<<<<<<< HEAD
=======
>>>>>>> a89b0afcb9ac6f1634513546167c552d6b0da747
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup, clearError } from "../store/slices/authSlice";
import "./Auth.css";

export default function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error: authError, user, loading: authLoading } = useSelector((state) => state.auth);

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [localLoading, setLocalLoading] = useState(false);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLocalLoading(true);

        const { firstName, lastName, email, phone, password, confirmPassword } = form;

        if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
            setError("Please fill all fields");
            setLocalLoading(false);
            return;
        }

        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError("Please enter a valid email");
            setLocalLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setLocalLoading(false);
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            setLocalLoading(false);
            return;
        }

        // Generate username from first name
        const username = firstName.toLowerCase() + Math.floor(Math.random() * 1000);

        // Call signup from Redux
        dispatch(signup({
            username,
            firstName,
            lastName,
            email,
            phone,
            password
        }));
    };

    // Handle authentication state changes
    useEffect(() => {
        if (authError) {
            setError(authError);
            setLocalLoading(false);
        }
    }, [authError]);

    // Check if user was successfully registered
    useEffect(() => {
        // If user data is available and no error, signup was successful
        if (user && !authError && !authLoading && localLoading) {
            setSuccess("Account created successfully! Redirecting to login...");
            setLocalLoading(false);
            
            const timer = setTimeout(() => {
                dispatch(clearError());
                navigate("/login", { replace: true });
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [user, authError, authLoading, localLoading, navigate, dispatch]);

    // Alternative: Check after signup action is complete
    useEffect(() => {
        if (!authLoading && localLoading && !authError) {
            // Small delay to ensure state is updated
            const timer = setTimeout(() => {
                setSuccess("Account created successfully! Redirecting to login...");
                setLocalLoading(false);
                
                setTimeout(() => {
                    dispatch(clearError());
                    navigate("/login", { replace: true });
                }, 1500);
            }, 500);
            
            return () => clearTimeout(timer);
        }
    }, [authLoading, localLoading, authError, navigate, dispatch]);

    // Auto reset loading if something goes wrong
    useEffect(() => {
        if (localLoading) {
            const timer = setTimeout(() => {
                if (localLoading) {
                    setLocalLoading(false);
                    setError("Signup timed out. Please try again.");
                }
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [localLoading]);

    const isLoading = localLoading || authLoading;

    return (
        <div className="auth-container">
            {/* Left image - Mobile Related */}
            <div className="auth-image">
                <img
                    src="https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Mobile Signup"
                />
                <div className="image-overlay">
                    <h3>Join MyPhoneHub</h3>
                    <p>Discover the world of mobile technology and stay updated with the latest trends</p>
                </div>
            </div>

            {/* Right form */}
            <div className="auth-form">
                <div className="form-header">
                    <h2>Create Account</h2>
                    <p>Join us today and explore amazing features</p>
                </div>

                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="name-group">
                        <div className="input-group">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={form.firstName}
                                onChange={handleChange}
                                disabled={isLoading}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={form.lastName}
                                onChange={handleChange}
                                disabled={isLoading}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={handleChange}
                            disabled={isLoading}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={form.phone}
                            onChange={handleChange}
                            disabled={isLoading}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={handleChange}
                            disabled={isLoading}
                            required
                            minLength="6"
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            disabled={isLoading}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className={`signup-btn ${isLoading ? 'loading' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <span className="spinner"></span>
                                Signing Up...
                            </>
                        ) : (
                            "Sign Up"
                        )}
                    </button>
                </form>

                <div className="auth-links">
                    <span>Already have an account? <Link to="/login" className="link">Login</Link></span>
                </div>

                <div className="terms">
                    <p>By signing up, you agree to our <a href="#" className="link">Terms of Service</a> and <a href="#" className="link">Privacy Policy</a></p>
                </div>
            </div>
        </div>
    );
}
