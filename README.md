
📄 README.md
# 🧩 Login Dashboard App (with Redux Toolkit + React + Vite)

A fully functional **Login / Signup Dashboard** built using **React**, **Redux Toolkit**, and **Vite**.  
Includes authentication, route protection, and a modern dashboard layout.

---

## 🚀 Features

- 🔐 **Authentication System**
  - Login / Signup functionality
  - Logout and session persistence
  - Protected routes using Redux state

- 🧭 **Routing & Navigation**
  - React Router-based routing
  - Navbar with active route highlighting

- ⚙️ **State Management (Redux Toolkit)**
  - Global state for authentication and user data
  - `createSlice` for reducers and actions
  - `useSelector` and `useDispatch` hooks

- 📱 **Dashboard Pages**
  - Home, About, Contact, Blog, Profile, Settings
  - Each page styled separately
  - Modular and reusable components

---

## 🏗️ Folder Structure

my-auth-app/
├─ index.html
├─ package.json
├─ vite.config.js
└─ src/
├─ main.jsx
├─ App.jsx
├─ App.css
├─ redux/
│ ├─ store.js
│ └─ authSlice.js
├─ components/
│ ├─ Navbar.jsx
│ ├─ Navbar.css
│ └─ PrivateRoute.jsx
├─ pages/
│ ├─ Login.jsx
│ ├─ Signup.jsx
│ ├─ ForgotPassword.jsx
│ └─ dashboard/
│ ├─ Dashboard.jsx
│ ├─ Home.jsx
│ ├─ About.jsx
│ ├─ Contact.jsx
│ ├─ Blog.jsx
│ ├─ Profile.jsx
│ ├─ Settings.jsx
│ ├─ dashboard.css
│ ├─ home.css
│ ├─ about.css
│ ├─ contact.css
│ ├─ blog.css
│ ├─ profile.css
│ └─ settings.css


---

## ⚙️ Technologies Used

- **React 18**
- **Vite**
-  **Redux Toolkit**
-  **React Router DOM**
-  **CSS Modules**

---

Install dependencies (step)
npm install
✅ React Router (for navigation)
npm install react-router-dom
✅ Redux Toolkit + React-Redux (for state management)
npm install @reduxjs/toolkit react-redux
Run the development server
npm run dev
http://localhost:5173

