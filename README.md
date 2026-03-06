# Chess For Geeks

A full-stack chess application built with a React/Vite front-end and a Node/Express back-end. The project includes user authentication and supports local play, with plans for online play and puzzles.

## 🧭 Project Structure

```
chess/
├── client/              # React front-end (Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/  # UI components (Navbar, Game board, etc.)
│   │   ├── pages/       # Routeable pages (auth, playLocaly, settings)
│   │   ├── services/    # API helpers (authServices.js)
│   │   └── app.css
│   ├── package.json
│   └── vite.config.js
└── server/              # Node/Express API
    ├── config/          # Configuration (db.js)
    ├── controllers/     # Route handlers (authController.js)
    ├── models/          # Mongoose models (userModel.js)
    ├── routes/          # Express routes (authRoutes.js)
    ├── app.js
    ├── server.js
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB (local or Atlas)

### Setup

1. **Clone repository**
   ```bash
   git clone <repo-url> chess
   cd chess
   ```

2. **Install dependencies**
   ```bash
   # server
   cd server && npm install

   # client
   cd ../client && npm install
   ```

3. **Environment variables**
   - Create a `.env` file in the server folder with:
     ```ini
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/chess
     JWT_SECRET=your_secret_here
     ```

4. **Run the server**
   ```bash
   cd server
   npm run dev   # or `node server.js` for production
   ```

5. **Run the client**
   ```bash
   cd ../client
   npm run dev
   ```

6. **Open the app**
   Navigate to `http://localhost:5173` (Vite default) and explore.

## 📦 Features
- **User authentication** with registration and login (JWT via Express)
- **Interactive chessboard** using [`react-chessboard`](https://www.npmjs.com/package/react-chessboard) and game logic powered by [`chess.js`](https://www.npmjs.com/package/chess.js)
- **Local gameplay** with robust move validation and visual highlights
- Clean, responsive UI with animated transitions and blur effects
- Client-side routing via React Router, wrapped in a shared `Layout` component
- Modular codebase: services, hooks, contexts and reusable components

## 🛠️ Technologies
- **Frontend:** React, Vite, React Router, react-chessboard, chess.js
- **Backend:** Node.js, Express, MySQL (via `mysql2` / `sequelize` or plain driver)
- **Authentication:** JWT tokens stored in HTTP-only cookies
- **Styling:** Custom CSS with CSS variables, flexbox layouts, and hover animations
- **Tooling:** ESLint, Prettier (via ESLint config), Vite dev server

## 📁 Tips
- The navbar and layout components live in `client/src/components`.
- Auth pages are under `client/src/pages/Auth`.
- API calls are managed by `client/src/services/authServices.js`.

## ✅ To Do
- Implement online multiplayer
- Add puzzles and profile management
- Improve UI animations and mobile responsiveness

## 📄 License
MIT License

---

Happy coding! 🧠♟️
