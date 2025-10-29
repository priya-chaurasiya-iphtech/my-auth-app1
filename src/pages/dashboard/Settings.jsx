import React, { useState, useEffect } from "react";
import "./Settings.css";

export default function Settings() {
    const [settings, setSettings] = useState({
        theme: "light",
        notifications: true,
        emailUpdates: true,
        smsAlerts: false,
        language: "english",
        autoPlay: false,
        privacy: "public"
    });

    // Theme apply karne ke liye useEffect
    useEffect(() => {
        applyTheme(settings.theme);
    }, [settings.theme]);

    // Theme apply karne ka function
    const applyTheme = (theme) => {
        const html = document.documentElement;

        // Remove all theme classes
        html.classList.remove('light-theme', 'dark-theme', 'auto-theme');

        // Apply selected theme
        if (theme === 'auto') {
            // Auto theme - system preference follow karega
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                html.setAttribute('data-theme', 'dark');
            } else {
                html.setAttribute('data-theme', 'light');
            }
        } else {
            html.setAttribute('data-theme', theme);
        }

        // Save theme to localStorage
        localStorage.setItem('app-theme', theme);
    };

    // Component mount hone par saved theme load karein
    useEffect(() => {
        const savedTheme = localStorage.getItem('app-theme');
        if (savedTheme) {
            setSettings(prev => ({ ...prev, theme: savedTheme }));
        }
    }, []);

    const handleChange = (key, value) => {
        setSettings(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleSave = () => {
        // Save all settings to localStorage
        localStorage.setItem('app-settings', JSON.stringify(settings));
        alert("Settings saved successfully!");
    };

    const handleReset = () => {
        const defaultSettings = {
            theme: "light",
            notifications: true,
            emailUpdates: true,
            smsAlerts: false,
            language: "english",
            autoPlay: false,
            privacy: "public"
        };

        setSettings(defaultSettings);
        applyTheme("light");
        localStorage.removeItem('app-settings');
    };

    // Auto theme ke liye system preference detect karein
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleSystemThemeChange = (e) => {
            if (settings.theme === 'auto') {
                applyTheme('auto');
            }
        };

        mediaQuery.addEventListener('change', handleSystemThemeChange);

        return () => {
            mediaQuery.removeEventListener('change', handleSystemThemeChange);
        };
    }, [settings.theme]);

    return (
        <div className="settings-container">
            <div className="settings-header">
                <h1>Settings</h1>
                <p>Customize your MyPhoneHub experience</p>
            </div>

            <div className="settings-content">
                {/* Theme Settings */}
                <div className="settings-section">
                    <h3>🎨 Appearance</h3>
                    <div className="settings-group">
                        <label className="settings-label">Theme</label>
                        <div className="theme-options">
                            <button
                                className={`theme-option ${settings.theme === 'light' ? 'active' : ''}`}
                                onClick={() => handleChange('theme', 'light')}
                            >
                                ☀️ Light
                            </button>
                            <button
                                className={`theme-option ${settings.theme === 'dark' ? 'active' : ''}`}
                                onClick={() => handleChange('theme', 'dark')}
                            >
                                🌙 Dark
                            </button>
                            <button
                                className={`theme-option ${settings.theme === 'auto' ? 'active' : ''}`}
                                onClick={() => handleChange('theme', 'auto')}
                            >
                                🔄 Auto
                            </button>
                        </div>
                    </div>
                </div>

                {/* Notification Settings */}
                <div className="settings-section">
                    <h3>🔔 Notifications</h3>
                    <div className="settings-group">
                        <div className="toggle-group">
                            <label className="toggle-label">
                                Push Notifications
                                <span className="toggle-description">Receive app notifications</span>
                            </label>
                            <label className="toggle-switch">
                                <input
                                    type="checkbox"
                                    checked={settings.notifications}
                                    onChange={(e) => handleChange('notifications', e.target.checked)}
                                />
                                <span className="slider"></span>
                            </label>
                        </div>

                        <div className="toggle-group">
                            <label className="toggle-label">
                                Email Updates
                                <span className="toggle-description">Get product updates via email</span>
                            </label>
                            <label className="toggle-switch">
                                <input
                                    type="checkbox"
                                    checked={settings.emailUpdates}
                                    onChange={(e) => handleChange('emailUpdates', e.target.checked)}
                                />
                                <span className="slider"></span>
                            </label>
                        </div>

                        <div className="toggle-group">
                            <label className="toggle-label">
                                SMS Alerts
                                <span className="toggle-description">Order updates via SMS</span>
                            </label>
                            <label className="toggle-switch">
                                <input
                                    type="checkbox"
                                    checked={settings.smsAlerts}
                                    onChange={(e) => handleChange('smsAlerts', e.target.checked)}
                                />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* General Settings */}
                <div className="settings-section">
                    <h3>⚙️ General</h3>
                    <div className="settings-group">
                        <div className="select-group">
                            <label className="settings-label">Language</label>
                            <select
                                value={settings.language}
                                onChange={(e) => handleChange('language', e.target.value)}
                                className="settings-select"
                            >
                                <option value="english">English</option>
                                <option value="hindi">Hindi</option>
                                <option value="spanish">Spanish</option>
                                <option value="french">French</option>
                            </select>
                        </div>

                        <div className="toggle-group">
                            <label className="toggle-label">
                                Auto-play Videos
                                <span className="toggle-description">Automatically play product videos</span>
                            </label>
                            <label className="toggle-switch">
                                <input
                                    type="checkbox"
                                    checked={settings.autoPlay}
                                    onChange={(e) => handleChange('autoPlay', e.target.checked)}
                                />
                                <span className="slider"></span>
                            </label>
                        </div>

                        <div className="select-group">
                            <label className="settings-label">Privacy</label>
                            <select
                                value={settings.privacy}
                                onChange={(e) => handleChange('privacy', e.target.value)}
                                className="settings-select"
                            >
                                <option value="public">Public</option>
                                <option value="friends">Friends Only</option>
                                <option value="private">Private</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Account Actions */}
                <div className="settings-section">
                    <h3>🔐 Account</h3>
                    <div className="account-actions">
                        <button className="account-btn change-password">
                            🔑 Change Password
                        </button>
                        <button className="account-btn download-data">
                            📥 Download Data
                        </button>
                        <button className="account-btn delete-account">
                            🗑️ Delete Account
                        </button>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="settings-actions">
                    <button className="secondary-btn" onClick={handleReset}>
                        Reset to Default
                    </button>
                    <button className="primary-btn" onClick={handleSave}>
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}