# VideoBelajar

VideoBelajar is a web-based edutech project that provides an on-demand video course interface. This project was built as part of the Fullstack Developer Bootcamp by Harisenin.com.

The current implementation uses a React frontend built with Vite. The backend folder exists, but it has not been implemented yet.

## Tech Stack

- React 19
- Vite 8
- React Router DOM 7
- Tailwind CSS 4
- JavaScript
- ESLint

## Pages

The app currently has three frontend routes:

```text
/          Homepage / landing page
/login     Login page
/register  Register page
```

Current page coverage:

- Homepage
  - Responsive header
  - Hero section
  - Featured course section
  - Course cards
  - Newsletter / call to action section
  - Footer
- Login page
  - Login form slicing
  - Password field with eye icon
  - Google login button UI
- Register page
  - Register form slicing
  - Phone number field with country code selector
  - Password and confirm password fields
  - Google register button UI

## Project Structure

```text
VideoBelajar/
|-- backend/
|-- docs/
|   `-- design/
|-- frontend/
|   |-- public/
|   |-- src/
|   |   |-- assets/
|   |   |-- components/
|   |   |   |-- CourseCard.jsx
|   |   |   |-- Footer.jsx
|   |   |   `-- Header.jsx
|   |   |-- pages/
|   |   |   |-- Home.jsx
|   |   |   |-- Login.jsx
|   |   |   `-- Register.jsx
|   |   |-- App.jsx
|   |   |-- index.css
|   |   `-- main.jsx
|   |-- package.json
|   `-- vite.config.js
`-- README.md
```

Notes:

- `frontend` contains the active React application.
- `backend` is currently empty.
- `docs/design` contains design references.

## How to Run

Make sure Node.js and npm are installed:

```bash
node -v
npm -v
```

Install dependencies:

```bash
cd frontend
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal. By default, Vite commonly runs at:

```text
http://localhost:5173
```

Build the frontend:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Status

This project is currently in the frontend slicing stage.

Implemented:

- React app structure
- Homepage UI
- Login page UI
- Register page UI
- Static assets
- Client-side routing

Not implemented yet:

- Backend API
- Real authentication
- Form validation
- Course filtering logic
- Dynamic course data
- User session handling
