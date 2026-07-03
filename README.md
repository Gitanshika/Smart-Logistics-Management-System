# 🚚 Smart Logistics Management System

A full-stack MERN-based Logistics Management System that streamlines shipment management through dedicated Customer, Admin, and Driver portals. The application provides secure authentication, shipment tracking, driver assignment, and delivery status management.

---

## 🌐 Live Demo

**Frontend:**  
https://smart-logistics-management-system.vercel.app

**Backend API:**  
https://smart-logistics-management-system.onrender.com

---

## 📂 GitHub Repository

https://github.com/Gitanshika/Smart-Logistics-Management-System

---

# ✨ Features

## 👤 Customer

- User Registration & Login
- Create New Shipment
- View My Shipments
- Track Shipment
- Dashboard Overview

## 👨‍💼 Admin

- Secure Admin Login
- View All Shipments
- View Available Drivers
- Assign Drivers
- Dashboard Analytics

## 🚛 Driver

- Driver Login
- View Assigned Shipments
- Update Shipment Status
- Driver Dashboard

---

# 🔐 Authentication

- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Role-Based Authorization

Supported Roles:

- Customer
- Admin
- Driver

---

# 🛠 Tech Stack

### Frontend

- React.js
- React Router DOM
- Tailwind CSS
- Axios
- Lucide React
- React Hot Toast

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt

### Deployment

- Vercel
- Render
- MongoDB Atlas

---

# 📁 Folder Structure

```
Smart-Logistics-Management-System
│
├── frontend
│   ├── src
│   ├── components
│   ├── layouts
│   ├── pages
│   ├── routes
│   └── services
│
├── backend
│   ├── src
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── server.js
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Gitanshika/Smart-Logistics-Management-System.git
```

---

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# ⚙️ Environment Variables

## Backend (.env)

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

For production, configure:

```env
VITE_API_URL=https://smart-logistics-management-system.onrender.com/api
```

---

# 📌 API Modules

### Authentication

- Register User
- Login User
- Get Drivers

### Customer

- Create Shipment
- My Shipments
- Dashboard
- Track Shipment

### Admin

- View All Shipments
- Assign Driver

### Driver

- Assigned Shipments
- Update Shipment Status

---

# 🔄 Project Workflow

### Customer

```
Register/Login
        ↓
Create Shipment
        ↓
Track Shipment
```

### Admin

```
View Shipments
        ↓
Assign Driver
```

### Driver

```
View Assigned Shipments
        ↓
Update Status
```

---

# 🚀 Future Enhancements

- Google Maps Integration
- Live Driver Location Tracking
- Email Notifications
- SMS Notifications
- Shipment History
- Payment Gateway
- Analytics Dashboard
- File Upload Support

---

# 👩‍💻 Author

**Anshika**

GitHub:  
https://github.com/Gitanshika

LinkedIn:  
https://www.linkedin.com/in/Anshika09choudhary

---

# ⭐ Show Your Support

If you found this project useful, consider giving it a ⭐ on GitHub.
