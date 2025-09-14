# 🎬 MovieTake

[![GitHub stars](https://img.shields.io/github/stars/tejasbv46/MovieTake?style=social)](https://github.com/tejasbv46/MovieTake/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/your-username/MovieTake?style=social)](https://github.com/your-username/MovieTake/network/members)
[![License](https://img.shields.io/github/license/your-username/MovieTake)](https://github.com/your-username/MovieTake/blob/main/LICENSE)

**MovieTake** is a MERN stack movie rating website allowing users to explore, rate, and review movies.

---

## 📸 Screenshots

**Home Page**
![screenshot1](https://github.com/Nab32/MovieTake/assets/90017423/18eb4963-a248-4a9c-ac05-8a1578dcc293)

**Movie Details Page**
![screenshot2](https://github.com/Nab32/MovieTake/assets/90017423/69bca924-eb95-4449-a31d-8de5280b21b7)

---

## ⚡ Features

- Home Page with trending movies  
- Secure Login/Register  
- Movie details with global ratings  
- User rating system  
- Responsive design for mobile & desktop  

---

## 🛠 Technologies Used

- **Frontend**: ReactJS, Vite, CSS, JS  
- **Backend**: NodeJS, ExpressJS  
- **Database**: MongoDB  
- **Auth**: JWT  
- **API**: OMDb API  

---

## 🚀 Getting Started

### 1. Clone Repo
```bash
git clone https://github.com/your-username/MovieTake.git
cd MovieTake
```
## 🚀 Getting Started

Follow these steps to set up and run the project locally.

---

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/MovieTake.git
cd MovieTake
```
2. Install Dependencies
```bash

# Client
cd client
npm install
```
```
# Server
cd ../server
npm install
```
3. Setup Environment Variables
Create a .env file inside the server/ folder with the following keys:

```
env
Copy code
OMDB_KEY=your_omdb_api_key
MONGODB_SECRET_URL=your_mongodb_connection_url
SECRET_KEY=your_jwt_secret_key
Note: Keep your .env file private. Do not commit it to GitHub.
```
4. Run the Project
Open two terminals: one for the client and one for the server.

```bash

# Terminal 1: Client
```
cd client
npm run dev
```

# Terminal 2: Server
```
cd server
npm start 




📂 Folder Structure
```
MovieTake/
├─ client/           # React frontend
├─ server/           # Express backend
├─ .gitignore
└─ README.md
```
🌟 Future Enhancements
User reviews & comments

Personal watchlists

Social login integration

🤝 Contributing
Fork the repository

Create a new branch:

```

git checkout -b feature/YourFeature
Make your changes and commit:
```

```
git commit -m "Add Your Feature"
Push your branch:
```
```
Copy code
git push origin feature/YourFeature
Open a Pull Request
```
📄 License

This project is licensed under the MIT License.
