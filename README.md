# GitHub Profile Search

A stunning, modern web application to search and explore GitHub user profiles with a premium glassmorphic design.

![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Features

- **Instant Search** - Search any GitHub user by username
- **User Statistics** - View followers, following, and repository counts
- **Repository Cards** - Beautiful cards showing user's public repositories
- **Fully Responsive** - Works perfectly on all devices
- **Error Handling** - Graceful error messages with retry functionality
- **Loading States** - Beautiful loading animations

## Tech Stack

- **React**
- **Tailwind CSS v4**
- **GitHub API**

## Installation

```bash
# Clone the repository
git clone https://github.com/Asif10H/search-github-profiles.git

cd search-github-profiles

npm install

npm start
```

The app will open at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

## 🌐 Live Demo

Visit: https://gh-profile-insight.vercel.app/

## Project Structure

```
search-github-profiles/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ErrorMessage/
│   │   │   └── ErrorMessage.js
│   │   ├── Header/
│   │   │   └── Header.js
│   │   ├── Home/
│   │   │   └── Home.js
│   │   ├── LoadingSpinner/
│   │   │   └── LoadingSpinner.js
│   │   └── User/
│   │       └── User.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
├── postcss.config.js
└── README.md
```

## 🌐 API

This project uses the [GitHub REST API](https://docs.github.com/en/rest):

- User Profile: `https://api.github.com/users/{username}`
- User Repositories: `https://api.github.com/users/{username}/repos`
