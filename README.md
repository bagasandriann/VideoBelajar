# VideoBelajar

VideoBelajar is a web-based edutech landing page project that provides an on-demand video course interface. This project was built as part of the Fullstack Developer Bootcamp by Harisenin.com.

The current implementation uses plain HTML, CSS, and a small amount of vanilla JavaScript. No JavaScript framework or build tool is required.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Static assets: PNG, JPG, and SVG

## Pages

- `index.html` - Homepage / landing page
- `login.html` - Login page
- `register.html` - Register page

## Features

- Responsive homepage layout
- Responsive header
- Hero section
- Featured course cards
- Newsletter / call to action section
- Footer section
- Login form slicing
- Register form slicing
- Country flag switcher on the register phone code field using vanilla JavaScript

## Project Structure

```text
VideoBelajar/
|-- backend/
|-- docs/
|   `-- design/
|-- vanilla/
|   |-- assets/
|   |-- css/
|   |   |-- login.css
|   |   |-- register.css
|   |   `-- style.css
|   |-- index.html
|   |-- login.html
|   `-- register.html
`-- README.md
```

Note: the `backend` folder is currently empty. The active submission is inside the `vanilla` folder.

## How to Run

No installation is required.

Open the HTML files directly in your browser:

```text
vanilla/index.html
vanilla/login.html
vanilla/register.html
```

On Windows PowerShell, you can run:

```powershell
start .\vanilla\index.html
start .\vanilla\login.html
start .\vanilla\register.html
```

You can also use the Live Server extension in VS Code:

1. Open the project folder in VS Code.
2. Right-click one of the HTML files inside `vanilla`.
3. Select `Open with Live Server`.

## Styling Files

- `vanilla/css/style.css` is used by the homepage.
- `vanilla/css/login.css` is used by the login page.
- `vanilla/css/register.css` is used by the register page.

The CSS files are intentionally separated so each page can be reviewed or committed independently.

## JavaScript

The register page includes a small inline vanilla JavaScript script to update the country flag when the phone country code changes.

No external JavaScript library is used.

## Design Reference

Design references are stored in:

```text
docs/design
```

Assets used by the static pages are stored in:

```text
vanilla/assets
```

## Status

This project is currently in the static frontend slicing stage. Real authentication, API integration, form validation, and course filtering have not been implemented yet.
