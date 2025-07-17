

## Personal Notes App 📝

A simple, full-stack personal notes application built with React, Node.js/Express, and MongoDB. This project allows users to create, view, edit, and delete notes.

---

### Features

* **Frontend (React)**:
    * Add new notes.
    * View a list of existing notes.
    * Edit existing notes.
    * Delete notes.
* **Backend (Node.js/Express)**:
    * RESTful API for managing notes.
    * Connects to MongoDB for data persistence.

---

### Getting Started

Follow these steps to get the Notes App up and running on your local machine.

#### Prerequisites

Make sure you have the following installed:

* **Node.js** (includes npm)
* **Git**
* **MongoDB Atlas Account** (for your database connection string)

#### Local Setup

##### 1. Clone the Repository

First, clone the project repository to your local machine:

`git clone https://github.com/yourusername/notes-app.git`

##### 2. Navigate into the Project Folder

Move into the root directory of the cloned project:

`cd notes-app`

---

### Frontend Setup (React)

The frontend is a React application created with Vite.

1.  **Navigate to the Client Directory**:

    `cd client`

2.  **Install Dependencies**:
    Install all the required packages for the frontend:

    `npm install`

3.  **Start the React Development Server**:
    Launch the React app:

    `npm run dev`

    The frontend should now be running at `http://localhost:5173`.

---

### Backend Setup (Node.js + Express + MongoDB)

The backend is an Express.js application connected to MongoDB.

1.  **Navigate to the Server Folder**:
    Open a new terminal or navigate back to the `notes-app` root and then into the `server` directory:

    `cd ../server` (If you're in the client folder)
    **OR**
    `cd server` (If you're in the notes-app root folder)

2.  **Install Dependencies**:
    Install all the required packages for the backend:

    `npm install`

3.  **Create a .env File**:
    In the `server` folder, create a new file named `.env`. This file will store your MongoDB connection string securely.

    Add the following line to your `.env` file, replacing `your_mongodb_connection_string` with your actual MongoDB Atlas URI:

    `MONGO_URI=your_mongodb_connection_string`

    *Tip*: You can get your MongoDB connection string from your MongoDB Atlas dashboard. Ensure your IP address is whitelisted to allow connections.

4.  **Start the Backend Server**:
    Start the backend API server. `nodemon` is recommended for automatic restarts on file changes during development.

    * **Using Nodemon (Recommended)**:
        `nodemon index.js`
    * **Using Node**:
        `node index.js`

    The backend API server will start at `http://localhost:5000`.

---

### API Endpoints

The backend API provides the following routes for managing notes:

* **`POST /api/notes`**: Create a new note.
* **`GET /api/notes`**: Fetch all notes.
* **`PUT /api/notes/:id`**: Update an existing note by its ID.
* **`DELETE /api/notes/:id`**: Delete a note by its ID.

#### Verify the API

After starting the backend server, you can verify it's running correctly by visiting:

`http://localhost:5000/api/notes`

You should receive an empty array `[]` (if no notes are added yet) or a JSON array of notes from the backend if it's working as expected.

---

## Deployment

### Frontend Deployment (React App)

You can deploy the React frontend on platforms like Vercel or Netlify.

1.  Create an account on your chosen platform (Vercel or Netlify).
2.  Connect your GitHub repository to Vercel/Netlify and follow their intuitive instructions to deploy the app.
3.  Once deployed, you’ll receive a public URL where your frontend is hosted.

### Backend Deployment (Express + MongoDB)

You can deploy the Express backend on platforms like Heroku or Render.

#### Heroku Deployment:

1.  **Install the Heroku CLI**: Download and install the Heroku CLI.
2.  **Login to Heroku**: From your command line, log into your Heroku account:
    `heroku login`
3.  **Create a Heroku App**: In the root directory of your `server` folder (or the main `notes-app` folder if you plan to deploy the whole repo as one slug), create a Heroku app:
    `heroku create <your-app-name-optional>`
4.  **Deploy to Heroku**: Push your code to the Heroku remote:
    `git push heroku main`
5.  **Set MongoDB URI**: Configure your `MONGO_URI` as an environment variable in Heroku. Go to your Heroku dashboard, select your app, then navigate to **Settings > Reveal Config Vars**, and add `MONGO_URI` with your MongoDB Atlas connection string.

#### Render Deployment:

1.  **Sign Up**: Create an account on Render.
2.  **Follow Instructions**: Follow Render's documentation to deploy your Express app. You'll typically connect your GitHub repository and configure the build command and start command for your Express server.
3.  **Set MongoDB URI**: Set up your `MONGO_URI` in Render’s environment settings for your service.

---

### MongoDB Connection

Ensure you have an active MongoDB Atlas cluster. Create a cluster and obtain the connection string from your MongoDB Atlas dashboard.

* **Local Development**: Update your `.env` file in the `server` directory with your `MONGO_URI`.
* **Deployment**: Set the `MONGO_URI` as an environment variable in your chosen deployment platform (Heroku Config Vars, Render Environment settings, etc.).

---

## Troubleshooting

### Frontend (React) Issues:

* **CORS Errors**: If you encounter issues related to cross-origin requests (e.g., "Access-Control-Allow-Origin" errors), ensure that **CORS is correctly configured in your backend** (`index.js` or a dedicated CORS middleware in your Express app).

### Backend (Express) Issues:

* **MongoDB Connection**: Verify that your **MongoDB Atlas cluster is active** and that the `MONGO_URI` in your `.env` file (or environment variables for deployment) is **correct and accessible**. Check your Atlas network access settings (IP whitelist).
* **Server Logs**: Check for errors in your server logs. If running locally with `nodemon`, examine the output in your terminal. For deployed apps, check the logs provided by your hosting platform (Heroku logs, Render logs, etc.).

---

## Tech Stack

* **Frontend**: React (Vite)
* **Backend**: Node.js, Express.js
* **Database**: MongoDB (MongoDB Atlas)
* **Version Control**: Git, GitHub Desktop

---

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

---

## License

This project is open-source and available under the MIT License.

