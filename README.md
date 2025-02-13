# Qatar Airline Management System

## 📌 Project Overview
The **Qatar Airline Management System** is a web-based application designed to streamline airline operations such as flight bookings, customer management, and real-time scheduling. This system leverages modern **web technologies and databases** to ensure efficiency, reliability, and scalability.

## 🚀 Features
- 🛫 **Flight Booking System** – Users can search and book flights easily.
- 👤 **User Authentication** – Secure login and registration.
- 📅 **Real-Time Flight Scheduling** – Live updates for flight availability.
- 🎛 **Admin Dashboard** – Manage flights, passengers, and crew assignments.
- 💳 **Payment Integration** – Supports online transactions.

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MySQL / PostgreSQL
- **Authentication:** Firebase Auth / JWT
- **Version Control:** Git & GitHub

## 📂 Folder Structure
```
qatar-airline-management/
│── backend/           # Server-side code (Node.js, Express)
│── frontend/          # Client-side code (React.js)
│── database/          # SQL scripts and database schema
│── public/            # Static assets
│── README.md          # Documentation
│── .gitignore         # Ignored files
│── package.json       # Dependencies & scripts
```

## 🏗️ Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/neel5682/qatar-airline-management.git
cd qatar-airline-management
```

### **2️⃣ Install Backend Dependencies**
```sh
cd backend
npm install
```

### **3️⃣ Set Up the Database**
- Create a **MySQL/PostgreSQL** database.
- Run the SQL script from `database/schema.sql` to set up tables.
- Update `.env` with your database credentials.

### **4️⃣ Install Frontend Dependencies**
```sh
cd ../frontend
npm install
```

### **5️⃣ Start the Application**
#### **Backend**
```sh
cd backend
npm start
```
#### **Frontend**
```sh
cd frontend
npm run dev
```

## 📌 API Endpoints
| Method | Endpoint            | Description               |
|--------|---------------------|---------------------------|
| GET    | `/api/flights`      | Get all flights           |
| POST   | `/api/bookings`     | Create a new booking      |
| GET    | `/api/users/:id`    | Get user details          |
| DELETE | `/api/bookings/:id` | Cancel a booking         |

## 🤝 Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a **Pull Request** 🚀

## 📜 License
This project is licensed under the **MIT License**.

## 📧 Contact
For queries or suggestions, contact: [kamalneel721@gmail.com](mailto:kamalneel721@gmail.com)

---
🚀 **Developed by Neel Kamal** | *Qatar Airline Management System - DBMS Project*
