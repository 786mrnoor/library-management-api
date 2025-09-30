# 📚 Library Management System API

A RESTful API built with **Node.js, Express.js, and MongoDB** for managing books, authors, users, loans, and reviews in a library system.

---

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
MONGO_URI=mongodb://localhost:27017/libraryDB
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

---
