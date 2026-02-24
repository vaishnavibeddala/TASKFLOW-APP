# TaskFlow – Full Stack Scalable Web Application

## Overview

TaskFlow is a full-stack web application built using React.js and Node.js.  
It demonstrates secure authentication, protected routing, and complete CRUD functionality with a scalable project structure.

This project was developed as part of a Frontend Developer Internship assignment to showcase frontend engineering skills, backend integration, authentication mechanisms, and production-ready architecture practices.

---

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Tailwind CSS
- Protected Route Handling

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt (Password Hashing)
- Middleware-based Authentication

---

## Core Features

### Authentication
- User Registration with hashed passwords (bcrypt)
- Secure Login with JWT-based authentication
- Token-based protected routes
- Logout functionality

### Dashboard
- Fetch logged-in user profile from backend
- Create, Read, Update, Delete (CRUD) operations for tasks
- Toggle task completion
- Search and filter tasks
- Route protection (Dashboard accessible only after authentication)

### Security Practices
- Password hashing using bcrypt
- JWT verification middleware
- Protected API endpoints
- Environment variables for sensitive configuration
- .gitignore configured to exclude node_modules and .env

---

## Project Structure

taskflow-app/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.js
│
├── README.md
└── .gitignore

The architecture follows separation of concerns, making it scalable and easy to maintain.

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/vaishnavibeddala/TASKFLOW-APP.git
cd TASKFLOW-APP
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start backend server:

```bash
npm start
```

Backend runs on:
```
http://localhost:5000
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:
```
http://localhost:3000
```

---

## API Endpoints

### Authentication
- POST /api/auth/register
- POST /api/auth/login

### User
- GET /api/user/profile (Protected)

### Tasks
- GET /api/tasks (Protected)
- POST /api/tasks (Protected)
- PUT /api/tasks/:id (Protected)
- DELETE /api/tasks/:id (Protected)

All protected routes require:

```
Authorization: Bearer <token>
```

---

## Scalability Approach

The project is structured for production-level scaling:

- Modular architecture (controllers, routes, middleware separation)
- Environment-based configuration
- Reusable JWT middleware
- Clean frontend-backend separation
- Database abstraction using Mongoose models

For production scaling:

- Deploy backend on cloud services (AWS, Render, Railway)
- Deploy frontend on Vercel or Netlify
- Use production MongoDB cluster
- Implement rate limiting
- Add request validation layer
- Introduce refresh tokens
- Add centralized logging and monitoring
- Containerize using Docker
- Implement CI/CD pipeline

---

## Future Improvements

- Role-based authentication (Admin/User)
- Pagination for tasks
- Task categories and priority levels
- Unit and integration testing
- Docker containerization
- CI/CD automation
- UI enhancements and performance optimization

---

## Author

Vaishnavi Beddala  
Frontend Developer Intern Candidate
