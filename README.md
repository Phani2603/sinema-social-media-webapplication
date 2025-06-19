Sinema 🎬
A modern social media web application for film enthusiasts—build with React, Redux, Node.js, Express, and MongoDB. Users can create profiles, post content, connect with friends, and chat in real-time.

✨ Features
User Authentication

Sign-up, login, and secure JWT sessions

Password hashing with bcrypt

User Profiles

View and edit profiles

Upload avatars and bio

Posts

Create, edit, delete movie-related posts

Like/unlike posts

Comment on posts

Friends & Connections

Send/accept friend requests

Follow/unfollow users

View followers/following lists

Real-time Chat

One-to-one messaging powered by WebSockets

Real-time notifications for new messages

Notifications

Alerts for new friend requests, likes, comments, and messages

🚀 Tech Stack
Frontend

React, Redux (for state management), React-Router

UI styled with CSS/SASS or component libraries

Backend

Node.js, Express.js RESTful APIs

MongoDB with Mongoose ORM for data modeling

JWT (JSON Web Tokens) for authentication

WebSocket (e.g., Socket.io) for chat and notification features

🛠️ Quick Start
Clone the repo

bash
Copy
Edit
git clone https://github.com/Phani2603/sinema-social-media-webapplication.git
cd sinema-social-media-webapplication
Backend Setup

bash
Copy
Edit
cd server
npm install
cp .env.example .env
# fill in MONGO_URI, JWT_SECRET, etc.
npm run dev
Frontend Setup

bash
Copy
Edit
cd client
npm install
npm start
# App available at http://localhost:3000
🧪 Available Scripts
Frontend (React)	Backend (Node/Express)
npm start	npm run dev
npm test	npm test
npm run build	—

Customize and add more commands as needed (e.g., linting, migrating, seeding).

📂 Project Structure
bash
Copy
Edit
/client         # React application
  /src
    /components    # Reusable UI elements
    /pages         # Route-based page components
    /redux         # Actions, reducers, and store
    /api           # Axios API request wrappers

/server         # Express backend
  /controllers     # Request handlers
  /models          # Mongoose data schemas
  /routes          # API endpoints
  /middleware      # Auth, error handling, etc.
  /config          # DB and environment configuration
🔐 Configuration & Environment Variables
Rename .env.example to .env and populate:

ini
Copy
Edit
# .env (Backend)
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
# Add any additional keys (e.g. socket config, third-party API keys)
Include similar .env for frontend if using environment flags (like API endpoints).

🧩 Built With
React & Redux

Express & Node.js

MongoDB & Mongoose

JWT Authentication

WebSocket / Socket.io (Chat + Notifications)

bcrypt for hashing passwords

🧑‍💻 Contributing
Contributions are welcome! To contribute:

Fork the repository

Create a feature branch (git checkout -b feature/foo)

Run tests, write code

Commit changes (git commit -m "Add feature")

Push to your branch (git push origin feature/foo)

Open a Pull Request

Please follow the existing code style and write tests for new features.

📄 License
This project is licensed under the MIT License. See LICENSE for details.

📧 Contact
Created by Phani2603 – feel free to reach out with questions or suggestions.

🔗 Links
GitHub Repository: Phani2603/sinema-social-media-webapplication

Live Demo: Add link here if deployed
