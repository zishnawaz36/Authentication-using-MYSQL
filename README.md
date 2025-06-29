# 🔐 Node.js + MySQL Authentication API

This project is a backend authentication system built with **Node.js**, **Express**, **MySQL**, and **Sequelize**. It includes features like user registration, login, JWT-based authentication, and protected routes using middleware.

---

## 🚀 Features

- ✅ User Signup
- ✅ User Login
- ✅ JWT Authentication
- ✅ Bcrypt Password Hashing
- ✅ Protected Route (`/auth/getall`)
- ✅ Sequelize ORM Integration
- ✅ Dotenv for environment variables
- ✅ Clean Modular Code

---

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **MySQL**
- **Sequelize**
- **JWT (jsonwebtoken)**
- **bcrypt**
- **dotenv**

---

## 📁 Project Structure

project-root/
├── config/
│ └── db.js # Sequelize config for DB connection
├── models/
│ └── user.js # User model (Sequelize schema)
├── routes/
│ └── auth.js # Auth routes (signup/login/getall)
├── middleware/
│ └── authMiddleware.js # JWT auth middleware
├── .env # Environment variables
├── index.js # Entry point
├── package.json
└── README.md


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/auth-backend-mysql.git
cd auth-backend-mysql
npm install
environment variable
DB_NAME=testdb
DB_USER=root
DB_PASS=your_mysql_password
DB_HOST=localhost
JWT_SECRET=your_jwt_secret

CREATE DATABASE testdb;
cd Backend then :
npx nodemon index.js
 ✅ Database connected and tables synced!
🚀 Server running at http://localhost:3000

 API Endpoints
🔐 POST /auth/signup
Register a new user.

Request Body:

json
Copy
Edit
{
  "name": "zeeshan",
  "email": "zee@example.com",
  "password": "123456"
}
Response:

json
Copy
Edit
{
  "token": "your.jwt.token"
}
🔑 POST /auth/login
Login existing user.

Request Body:

json
Copy
Edit
{
  "email": "zee@example.com",
  "password": "123456"
}
Response:

json
Copy
Edit
{
  "token": "your.jwt.token"
}
👤 GET /auth/getall (Protected)
Get current logged-in user info (requires JWT token).

Header:

makefile
Copy
Edit
Authorization: Bearer <your_token_here>
Response:

json
Copy
Edit
{
  "id": 1,
  "name": "zeeshan",
  "email": "zee@example.com"
}
📌 How to Test
Use Thunder Client or Postman

First send POST /auth/signup

Then send POST /auth/login to get the token

Then send GET /auth/getall with header:

makefile
Copy
Edit
Authorization: Bearer your_jwt_token
📄 Sample .env
env
Copy
Edit
DB_NAME=testdb
DB_USER=root
DB_PASS=yourpassword
DB_HOST=localhost
JWT_SECRET=secret123
🙋‍♂️ Author
Zeeshan Nawaz
Fullstack Intern — Authentication Assignment


