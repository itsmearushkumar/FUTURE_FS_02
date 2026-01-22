# 🚀 Mini CRM – Client Lead Management System

**Full Stack Web Development – Task 2 (2026)**  
**By Future Interns**

A **Client Lead Management System (Mini CRM)** built using **React + Vite, Node.js, Express, and MongoDB**.  
This project simulates how real businesses manage incoming leads through a secure admin dashboard.

---

## 🔍 About the Project

Whenever a user fills a contact form on a website, businesses need a system to:

- Store leads
- Track lead status
- Add follow-up notes
- Convert leads into clients

This Mini CRM acts as an **internal admin panel** used by agencies, freelancers, and startups.

---

## 🎯 Objective

To build a simple yet functional CRM system that allows an admin to:

- View incoming leads
- Update lead status (New → Contacted → Converted)
- Manage follow-up notes
- Analyze lead data through charts
- Access data securely via admin login

---

## ✨ Features Implemented

### 🔐 Admin Authentication
- Admin login system
- Protected routes using React Router
- Logout functionality

### 📋 Lead Management
- View all leads
- Add new leads
- Update lead status
- Delete leads
- Add notes for follow-ups

### 🔎 Search & Filter
- Search leads by **name or email**

### 📊 Analytics
- Lead status distribution (Pie Chart)
- Leads by source (Bar Chart)

### 🧭 Pages
- Dashboard
- Leads
- Analytics
- Settings (placeholder for future admin controls)

---

## 🛠️ Tech Stack

### Frontend
- React.js (with Vite)
- React Router DOM
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Development Tools
- VS Code
- Git & GitHub
- Nodemon

---

## ⚡ React + Vite Setup

This project uses **Vite** for fast development with Hot Module Replacement (HMR).

Official plugins used:
- `@vitejs/plugin-react` (Babel-based Fast Refresh)

---

## 📂 Project Structure

mini-crm/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── LeadsTable.jsx
│   │   │   ├── CreateLeadModal.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Leads.jsx
│   │   │   ├── Analytics.jsx
│   │   │   ├── Settings.jsx
│   │   │   └── Login.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   │   └── leadController.js
│   │
│   ├── models/
│   │   └── Lead.js
│   │
│   ├── routes/
│   │   ├── leadRoutes.js
│   │   └── authRoutes.js
│   │
│   ├── config/
│   │   └── adminConfig.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md

---

## ▶️ How to run the project

/* 1️⃣ Clone the Repository */
git clone https://github.com/itsmearushkumar/FUTURE_FS_02.git
cd mini-crm


/* 2️⃣ Run Backend Server */
cd backend
npm install
npm run dev

/* Backend will run at:
   http://localhost:5000 */


/* 3️⃣ Run Frontend Application */
cd ../frontend
npm install
npm run dev

/* Frontend will run at:
   http://localhost:5173 */


/* 4️⃣ Admin Login (Demo Credentials) */
Email: admin@crm.com
Password: admin123


/* 5️⃣ Environment Variables (Backend) */
/* Create a .env file inside backend folder */

PORT=5000
MONGO_URI=your_mongodb_connection_string


/* NOTE:
   - Frontend and Backend run separately
   - .env file is ignored using .gitignore
   - Login is required to access dashboard pages */

---

## 🔐 Admin Login

This Mini CRM uses a **demo admin authentication system** to protect internal pages.

**Admin Credentials (Demo Purpose Only):**

- **Email:** `admin@crm.com`
- **Password:** `admin123`

> ⚠️ These credentials are hardcoded for demonstration purposes only.  
> In real-world applications, authentication should be implemented using:
> - Encrypted passwords
> - JWT tokens
> - Role-based access control

---

## 🧾 Conclusion

This project successfully demonstrates a **real-world Client Lead Management System (Mini CRM)** built using a modern full stack approach.

Through this project, the following concepts were implemented:

- Full Stack CRUD operations
- Secure admin authentication
- Protected routing in React
- State management and search functionality
- Data visualization using analytics charts
- Clean and reusable component-based architecture

This Mini CRM closely mirrors how agencies, freelancers, and startups manage incoming client leads in production systems.

---

## 👨‍💻 Author

**Arush Kumar**  
B.Tech – Computer Science Engineering  
Full Stack Web Development Intern  
**Future Interns – 2026**

---




