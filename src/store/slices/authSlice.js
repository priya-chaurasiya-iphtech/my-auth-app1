
import { createSlice } from "@reduxjs/toolkit";

// Load initial state from localStorage
const loadAuthState = () => {
  try {
    const serializedState = localStorage.getItem('authState');
    if (serializedState === null) {
      return {
        user: null,
        isAuthenticated: false,
        registeredUsers: [],
        error: null
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {
      user: null,
      isAuthenticated: false,
      registeredUsers: [],
      error: null
    };
  }
};

const initialState = loadAuthState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Signup function - ONLY REGISTRATION, NO AUTO LOGIN
    signup: (state, action) => {
      const { username, firstName, lastName, email, phone, password } = action.payload;

      // Check if username already exists
      const userExists = state.registeredUsers.find(user => user.username === username);
      if (userExists) {
        state.error = "Username already exists!";
        return;
      }

      // Check if email already exists
      const emailExists = state.registeredUsers.find(user => user.email === email);
      if (emailExists) {
        state.error = "Email already registered!";
        return;
      }

      // Create new user
      const newUser = {
        username,
        firstName,
        lastName,
        email,
        phone,
        password,
        createdAt: new Date().toISOString()
      };

      // Add to registered users
      state.registeredUsers.push(newUser);

      // DON'T set as current user - NO AUTO LOGIN
      state.error = null;

      // Save to localStorage
      localStorage.setItem('authState', JSON.stringify(state));
    },

    // Login function
    login: (state, action) => {
      const { email, password } = action.payload;

      // Find user by EMAIL and password
      const user = state.registeredUsers.find(
        user => user.email === email && user.password === password
      );

      if (user) {
        state.user = user;
        state.isAuthenticated = true;
        state.error = null;
        
        // Save to localStorage
        localStorage.setItem('authState', JSON.stringify(state));
      } else {
        state.error = "Invalid email or password!";
        state.user = null;
        state.isAuthenticated = false;
      }
    },

    // Logout function
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      
      // Clear localStorage
      localStorage.removeItem('authState');
    },

    // Clear error
    clearError: (state) => {
      state.error = null;
    },

    // Update user profile
    updateProfile: (state, action) => {
      if (state.user) {
        const updatedUser = { ...state.user, ...action.payload };

        // Update current user
        state.user = updatedUser;

        // Update in registered users list
        const userIndex = state.registeredUsers.findIndex(u => u.username === state.user.username);
        if (userIndex !== -1) {
          state.registeredUsers[userIndex] = updatedUser;
        }

        // Save to localStorage
        localStorage.setItem('authState', JSON.stringify(state));
      }
    },
  },
});

export const { signup, login, logout, updateProfile, clearError } = authSlice.actions;
export default authSlice.reducer;