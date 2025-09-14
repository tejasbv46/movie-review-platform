MovieTake 🎬

MovieTake is a simple yet powerful movie rating website built with the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS). It allows users to explore movies, rate them, and share their opinions with the community.

Screenshots

Features

Home Page: Showcases selected classic movies and trending titles.

Authentication System: Secure login and registration with hashed passwords.

Movie Pages: Each movie has a dedicated page showing ratings, release date, plot summary, and other details.

Rating System: Users can rate movies, helping the community maintain accurate ratings.

User Takes (TODO): Planned feature for users to publish personal reviews and opinions.

Responsive Design: Works well on desktop and mobile devices.

Getting Started

Follow these steps to set up and run the project locally.

1. Clone the repository
git clone https://github.com/your-username/MovieTake.git
cd MovieTake

2. Install dependencies

Install dependencies for both the client and server:

# Client
cd client
npm install

# Server
cd ../server
npm install

3. Environment Variables

Create a .env file in the server folder with the following keys:

OMDB_KEY=your_omdb_api_key
MONGODB_SECRET_URL=your_mongodb_connection_url
SECRET_KEY=your_jwt_secret_key


OMDB_KEY: API key to fetch movie data from OMDb API
.

MONGODB_SECRET_URL: MongoDB connection string to connect to your database cluster.

SECRET_KEY: Secret key for JWT authentication.

Tip: Keep .env files secret and never push them to GitHub.

4. Run the project

Open two terminal windows/tabs — one for the client and one for the server.

# Terminal 1 - Client
cd client
npm run dev

# Terminal 2 - Server
cd server
npm start


Client runs on: http://localhost:5173 (or Vite default port)

Server runs on: http://localhost:3001 (or Node default port)

Folder Structure
MovieTake/
├─ client/           # React frontend
│  ├─ src/
│  ├─ public/
│  └─ package.json
├─ server/           # Express backend
│  ├─ models/
│  ├─ routes/
│  ├─ server.js
│  └─ package.json
├─ .gitignore
└─ README.md

Technologies Used

Frontend: ReactJS, Vite, HTML, CSS, JavaScript

Backend: NodeJS, ExpressJS

Database: MongoDB

Authentication: JWT (JSON Web Tokens)

APIs: OMDb API for movie data

Future Enhancements

Add user reviews and comments

Implement personal watchlists

Improve UI/UX and responsiveness

Integrate social login options (Google, Facebook, etc.)

Contributing

Fork the repository

Create a new branch (git checkout -b feature/YourFeature)

Make your changes and commit (git commit -m "Add Your Feature")

Push to the branch (git push origin feature/YourFeature)

Create a Pull Request

License

This project is licensed under the MIT License.
