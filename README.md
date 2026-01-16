# Expense Tracker – Full Stack Application

## Author
Keerthan Rao

---

## Project Overview

This project is a full-stack Expense Tracker application built using modern web technologies.
It allows users to add, view and delete expenses with all data stored persistently in a PostgreSQL database.

The frontend is developed using React with Vite, while the backend is implemented using FastAPI.
The application follows a clean REST API architecture and ensures data persistence across page refreshes.

---

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend
- FastAPI
- Python
- SQLAlchemy ORM

### Database
- PostgreSQL

---

## Features

- Add new expenses with title, amount, and date
- View all saved expenses
- Delete expenses
- Automatic total expense calculation
- Persistent storage using PostgreSQL
- Clean and centered user interface
- RESTful API design

---

## Project Structure

my-react-app/
│
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── expense_schemas.py
│   ├── crud.py
│   ├── requirements.txt
│   └── .venv/
│
├── src/
│   ├── App.jsx
│   ├── api.js
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md

---

## How to Run the Project

### Prerequisites

- Node.js
- Python 3.11 or higher
- PostgreSQL
- pgAdmin (recommended)

---

### Backend Setup

cd backend
python -m pip install -r requirements.txt
python -m uvicorn main:app --reload

Backend will be available at:
http://127.0.0.1:8000

Swagger API documentation:
http://127.0.0.1:8000/docs

---

### Database Setup

Create a PostgreSQL database named:
expense_tracker

Update the database connection string in database.py:
postgresql://postgres:<YOUR_PASSWORD>@localhost/expense_tracker

---

### Frontend Setup

npm install
npm run dev

Frontend will be available at:
http://localhost:5173

---

## API Endpoints

GET     /expenses          Retrieve all expenses
POST    /expenses          Add a new expense
DELETE  /expenses          Delete an expense

---

## Learning Outcomes

- Built a complete full-stack application
- Designed REST APIs using FastAPI
- Integrated React frontend with FastAPI backend
- Used PostgreSQL with SQLAlchemy ORM
- Implemented persistent data storage
- Debugged real-world environment and dependency issues



Keerthan Rao
