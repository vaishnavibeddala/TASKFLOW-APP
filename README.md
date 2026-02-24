TaskFlow – Full Stack Scalable Web Application
Overview

TaskFlow is a full-stack web application built with React and Node.js that demonstrates secure authentication, protected routing, and complete CRUD functionality. The application allows users to register, log in, manage tasks, and access a personalized dashboard.

This project was developed as part of a Frontend Developer Internship assignment to demonstrate frontend engineering skills, backend integration, authentication, and scalable project structure.

Tech Stack
Frontend

React.js

React Router

Axios

Tailwind CSS

Context-based routing protection

Backend

Node.js

Express.js

MongoDB (Atlas)

Mongoose

JWT (JSON Web Tokens)

bcrypt (password hashing)

Features
Authentication

User registration with hashed passwords (bcrypt)

Secure login with JWT-based authentication

Token-based protected routes

Logout functionality

Dashboard

User profile fetching from backend

Create, Read, Update, Delete (CRUD) operations for tasks

Toggle task completion

Search and filter tasks

Route protection (Dashboard accessible only when authenticated)

Security

Password hashing using bcrypt

JWT verification middleware

Protected API endpoints

Environment variables for sensitive configuration

.gitignore configured to exclude node_modules and .env





Project Structure
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

The project is structured to allow easy scalability and separation of concerns.


Installation & Setup
1. Clone the Repository
git clone https://github.com/vaishnavibeddala/TASKFLOW-APP.git
cd TASKFLOW-APP
2. Backend Setup
cd backend
npm install

Create a .env file inside backend with:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Start backend:

npm start

Backend runs on:

http://localhost:5000
3. Frontend Setup
cd frontend
npm install
npm start

Frontend runs on:

http://localhost:3000



API Endpoints
Authentication

POST /api/auth/register

POST /api/auth/login

User

GET /api/user/profile (Protected)

Tasks

GET /api/tasks (Protected)

POST /api/tasks (Protected)

PUT /api/tasks/:id (Protected)

DELETE /api/tasks/:id (Protected)

All protected routes require:

Authorization: Bearer <token>
Scalability Approach

The project is structured to support future scalability:

Modular architecture (controllers, routes, middleware separation)

Environment-based configuration

JWT middleware reusable across endpoints

Frontend structured with reusable components

Clear separation between frontend and backend services

For production scaling:

Deploy backend on cloud (AWS, Render, Railway)

Deploy frontend on Vercel/Netlify

Use production MongoDB cluster

Add rate limiting and request validation

Implement refresh tokens

Add centralized logging and monitoring

Future Improvements

Role-based authentication (Admin/User)

Pagination for tasks

Task categories and priority levels

Unit and integration testing

Docker containerization

CI/CD pipeline integration


Author

Vaishnavi Beddala
Frontend Developer Intern Candidate
