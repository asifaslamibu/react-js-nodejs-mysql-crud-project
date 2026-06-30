# React + Node.js + MySQL CRUD Project

A full-stack CRUD application with a **React** frontend (built on the Corona React / BootstrapDash admin theme) and a **Node.js/Express + MySQL** backend. The app manages records (e.g. vehicles) through add / edit / list / delete screens that talk to a REST API on port `3001`.

## Tech Stack

- **Frontend:** React 16, React Router, Bootstrap 4 / React-Bootstrap, SCSS (node-sass), Axios
- **UI / charts:** Chart.js + react-chartjs-2, ChartistJS, jVectorMap, TinyMCE, react-quill, react-dnd
- **Backend:** Node.js, Express (server consuming the React client on port 3001)
- **Database:** MySQL

## Features

- Full CRUD: add, edit, list and delete records (vehicle data, e.g. `Add_data.js` / `Edit_data.js`)
- Corona React admin theme: dashboard, tables, forms, charts, error pages, auth pages
- Axios-based API calls to an Express backend (`http://localhost:3001/...`)
- Reusable layout (Navbar, Sidebar, Footer, Spinner) and routing via `AppRoutes.js`

## Prerequisites

- Node.js and npm
- MySQL server

## Installation & Setup

### 1. Client (React)

```bash
cd client
npm install
npm start
```

The React app runs on `http://localhost:3000`.

### 2. Database

Create a MySQL database and the required tables, then update the backend connection settings to match your credentials.

### 3. Server (Node.js / Express)

Start the Express API so it listens on port `3001` (the client posts to `http://localhost:3001/vehicle` and related endpoints). Run the server with `node` / `npm start` from the server directory.

## Project Structure

```
client/
├── package.json
└── src/app/
    ├── App.js, AppRoutes.js
    ├── dashboard/        # Dashboard views
    ├── form-elements/    # Add_data.js, Edit_data.js (CRUD forms)
    ├── tables/           # BasicTable.js (record listing)
    ├── user-pages/       # Login / Register
    └── shared/           # Navbar, Sidebar, Footer
```

## License

This project is for educational/portfolio purposes. The Corona React template is provided by BootstrapDash.
