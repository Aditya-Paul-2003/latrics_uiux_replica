# Latrics Industrial UI (MERN Stack)

A highly responsive, dynamic, and premium web application built for the industrial and manufacturing sector. It features a complete monolithic-to-modular React refactoring stringently coupled with a scalable Node.js/Express REST backend.

## 🚀 Tech Stack

- **Frontend:** React.js 19, Vite, Tailwind CSS v4, Framer Motion
- **Backend:** Node.js, Express.js, Socket.IO
- **Database:** MongoDB Atlas (Mongoose ODM)

## 🛠️ Prerequisites

Before you install, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- A [MongoDB Atlas](https://www.mongodb.com/atlas/database) account/URI

---

## 💻 How to Run the Code Locally

Follow these steps to download the code to your machine and run it.

### 1. Clone the Repository
Download the code from GitHub to your computer:
```bash
git clone https://github.com/Aditya-Paul-2003/latrics_uiux_replica.git
cd latrics_uiux_replica
```

### 2. Install Dependencies
This project uses npm Workspaces. A single install command will set up both the frontend and the backend automatically:
```bash
npm install
```

### 3. Set up Environment Variables
Navigate to the `backend` folder and configure your database credentials:
```bash
cd backend
cp .env.example .env
```
Open the newly created `.env` file and replace the `MONGODB_URI` placeholder with your actual MongoDB Atlas connection string.

### 4. Start the Application
Return to the root project folder and start the unified development server:
```bash
cd ..
npm run dev
```

The application uses `concurrently` to boot up two servers at once:
- **Frontend (UI):** [http://localhost:5173](http://localhost:5173)
- **Backend (API):** [http://localhost:5005](http://localhost:5005)

---

## 📂 Architecture Overview

The codebase uses a strict separation of concerns via a monorepo setup:

- `/frontend`: A pure Vite SPA. All API calls are abstracted through custom hooks and `/src/services/api.js`. Animations use `framer-motion` mapped to scroll events.
- `/backend`: A stateless Express API hooked to a persistent MongoDB database. Contains standard controllers (Routes) for handling contact form queries and newsletter subscriptions. Extensible WebSocket integration via Socket.IO.
