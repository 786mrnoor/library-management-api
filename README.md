# 📚 Library Management System API

A RESTful API built with **Node.js, Express.js, and MongoDB** for managing books, authors, users, loans, and reviews in a library system.

Live Link: https://library-management-api-xsxh.onrender.com/

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

## 📘 API Documentaions (Google Docs)

- [Books API](https://docs.google.com/document/d/1bbE_FXzHPoozWPhzzzBd8L8TEtve7JQNbeF48o1MGWs/edit?usp=sharing)
- [Authors API](https://docs.google.com/document/d/1tN-128y9_7kiAXV5UmXPjlyfdXIFZ2xL74Q8fxQug3A/edit?usp=sharing)
- [Users API](https://docs.google.com/document/d/1GUtDdRTlgxIbJn8gcTl1TNb2ymRt0LZ3vsY1xJndR6A/edit?usp=sharing)
- [Loans API](https://docs.google.com/document/d/1ThDKQV9IjvjNXv5mz8Xe8t9f8S-YsE-NqwNd2311528/edit?usp=sharing)
- [Reviews API](https://docs.google.com/document/d/1Nor_rZN_lIc6HRTKLoo3REv9z49WPriQfiRvS7fiOgA/edit?usp=sharing)

---
