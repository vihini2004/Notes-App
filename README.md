# Notes App

A simple **Notes App** built using **React**, **Express**, and **MongoDB**. This app allows users to create, edit, and delete notes. The backend is powered by **Node.js** and **Express**, and the database is hosted on **MongoDB Atlas**. The frontend is built with **React**.

## Features

- Add new notes with a title and content.
- Edit existing notes.
- Delete notes.
- Built with **React**, **Express**, and **MongoDB**.
  
## Tech Stack

- **Frontend**: React, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Atlas)
- **Deployment**:
  - **Frontend**: Vercel or Netlify
  - **Backend**: Heroku or Render

## Installation

### Prerequisites

- Make sure you have **Node.js** and **npm** installed.
- If you're using **MongoDB Atlas**, make sure your database cluster is set up and accessible.

Certainly! Below are the **Frontend** and **Backend setup steps** in markdown format for your **`README.md`** file:

### **Frontend Setup (React)**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/notes-app.git
````

2. **Navigate into the Project Folder**:

   ```bash
   cd notes-app
   ```

3. **Navigate to the Client Directory**:
   Change to the `client` directory where the React app is located:

   ```bash
   cd client
   ```

4. **Install the Dependencies**:
   Install all the required dependencies for the frontend:

   ```bash
   npm install
   ```

5. **Start the React Development Server**:
   To start the React development server, run the following command:

   ```bash
   npm run dev
   ```

   This will start the React app at `http://localhost:5173`.

---

### Backend Setup (Express + MongoDB)

1. **Navigate to the Server Folder**:
   Change to the `server` directory where the backend code is located:

   ```bash
   cd server
   ```

2. **Install the Dependencies**:
   Install all the required dependencies for the backend:

   ```bash
   npm install
   ```

3. **Create a `.env` File**:
   In the `server` folder, create a `.env` file and add the **MongoDB URI** to it. The `.env` file should look like this:

   ```bash
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Start the Backend Server**:
   Start the backend server using **nodemon** (recommended for auto-reload) or **node**:

   * If you have **nodemon** installed:

     ```bash
     nodemon index.js
     ```
   * Alternatively, if you don’t have **nodemon** installed, you can use **node**:

     ```bash
     node index.js
     ```

   This will start the backend API server at `http://localhost:5000`.

5. **Verify the API**:
   After starting the backend server, you can verify that the backend is running by visiting:

   ```plaintext
   http://localhost:5000/api/notes
   ```

   You should get a response from the backend if it's working correctly.

```

---

### **Explanation:**
- **Frontend Setup**: Contains steps to clone the repository, navigate to the correct directory, install dependencies, and start the React development server.
- **Backend Setup**: Instructions for setting up the backend, including dependencies, configuring MongoDB with a `.env` file, and starting the Express server.

```
Usage
The frontend is a React app that allows users to:
Add new notes.
Edit existing notes.
Delete notes.

The backend API is built using Express. The main API routes are:

POST /api/notes - Create a new note.
GET /api/notes - Fetch all notes.
PUT /api/notes/:id - Update an existing note by its ID.
DELETE /api/notes/:id - Delete a note by its ID.



