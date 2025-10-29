import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setError("Please enter your email");
            return;
        }

        // ✅ DEMO: Always show success message (logout state ke liye)
        // Actual implementation mein aap backend API call karenge
        setMessage(`Password reset link has been sent to ${email}`);
        setError("");
        setEmail(""); // Reset form
    };

    return (
        <div className="auth-container">
            {/* Left image - Mobile Related */}
            <div className="auth-image">
                <img
                    src="https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Forgot Password"
                />
                <div className="image-overlay">
                    <h3>Reset Your Password</h3>
                    <p>Enter your email and we'll send you a link to reset your password</p>
                </div>
            </div>

            {/* Right form */}
            <div className="auth-form">
                <div className="form-header">
                    <h2>Forgot Password?</h2>
                    <p>Don't worry! Enter your email to reset your password</p>
                </div>

                {error && <div className="error">{error}</div>}
                {message && (
                    <div className="success-message">
                        <span className="success-icon">✓</span>
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="reset-btn">Send Reset Link</button>
                </form>

                <div className="auth-links">
                    <Link to="/login" className="link">Back to Login</Link>
                    <span>Don't have an account? <Link to="/signup" className="link">Sign up</Link></span>
                </div>
            </div>
        </div>
    );
}