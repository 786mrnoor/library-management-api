# 📚 Library Management System API

A RESTful API built with **Node.js, Express.js, and MongoDB** for managing books, authors, users, loans, and reviews in a library system.

Live Link: https://library-management-api-xsxh.onrender.com/

Documentation and Diagram Link (Google drive): https://drive.google.com/drive/folders/1icL9U3XZZmJg7qHEqIhnu2hegJpD_MJn?usp=sharing

## 🛠 Tech Stack

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB with Mongoose
- **Version Control**: Git & GitHub
- **API Testing**: Postman
- **Documentation**: Google Docs

---

## 📂 Project Structure

```
├── controllers/        # Route handlers
├── models/             # Mongoose schemas
├── routes/             # API routes
├── services/           # Business logic
├── config/             # Database & app config
├── middleware/         # Middlewares (auth, error handling, multer)
├── utils/              # Utility functions
├── server.js           # Entry point
└── README.md           # Project documentation
```

---

## ⚡ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/786mrnoor/library-management-api
cd library-management-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=mongodb+srv://<user_name>:<db_password>@zysmp.mongodb.net/?retryWrites=true&w=majority&appName=yourappname
DB_NAME=librarydb
JWT_SECRET=your_secret
BOOK_UPLOAD_PATH=uploads/books/
USER_UPLOAD_PATH=uploads/users/
```

### 4. Run the Server

```bash
npm run dev
```

Server runs at: `http://localhost:5000`

---
