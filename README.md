# VideoBelajar

VideoBelajar is a web-based edutech platform that provides on-demand video courses to help users learn independently, flexibly, and based on their needs. This project was built as part of the Fullstack Developer Bootcamp by Harisenin.com.

The current project stage focuses on frontend UI slicing, including authentication pages and the homepage landing page.

## Tech Stack

- React 19
- Vite 8
- React Router DOM 7
- Tailwind CSS 4
- ESLint 10
- JavaScript

## Current Features

- Homepage / landing page
  - Responsive header
  - Hero section
  - Featured learning video collection section
  - Responsive course cards
  - Newsletter / call to action section
  - Responsive footer
- Login page
- Register page
- Image assets, logo, icons, avatar, and country flags

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
|   |   |-- pages/
|   |   |-- App.jsx
|   |   |-- index.css
|   |   `-- main.jsx
|   |-- package.json
|   `-- vite.config.js
`-- README.md
```

Note: the `backend` folder is currently empty.

## Prerequisites

Make sure you have installed:

- Node.js
- npm

Check your installed versions:

```bash
node -v
npm -v
```

## Installation

Go to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

## Running the Project

Start the development server:

```bash
npm run dev
```

After the server starts, open the URL shown in your terminal. Usually:

```text
http://localhost:5173
```

Available routes:

```text
/          Homepage
/login     Login page
/register  Register page
```

## Build

Create a production build:

```bash
npm run build
```

The build output will be generated in:

```text
frontend/dist
```

Preview the production build locally:

```bash
npm run preview
```

## Status

This project is currently in the frontend slicing stage. API integration, real authentication, course category filtering, and other interactive behaviors have not been implemented yet.
