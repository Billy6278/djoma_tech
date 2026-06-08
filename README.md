# Djoma Tech - Fullstack System

Welcome to the **Djoma Tech** application workspace. This project has been structured into a clean fullstack codebase containing a decoupled Express + Sequelize backend API and a high-performance, gorgeous Vite + React + Redux frontend.

## Structure
```
djomatech/
├── backend/          # Express API & Sequelize ORM
└── frontend/         # Vite & React (Redux Toolkit, HSL Custom UI CSS)
```

## Quick Start

### 1. Prerequisites
- **Node.js** (v16+)
- **MySQL** server running locally or remotely

### 2. Backend Setup
1. Open the terminal and navigate to `/backend`
2. Install packages:
   ```bash
   npm install
   ```
3. Copy environment variables and adjust as necessary:
   ```bash
   cp .env.example .env
   ```
4. Run migrations and seed data:
   ```bash
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```
5. Launch the API server:
   ```bash
   npm run dev
   ```
   The backend API will run on `http://localhost:5000`

### 3. Frontend Setup
1. Navigate to `/frontend`
2. Install packages:
   ```bash
   npm install
   ```
3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```
4. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The UI will open on `http://localhost:5173`

---
*Developed by Djoma Tech*
