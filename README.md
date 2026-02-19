# Kaushal Patel - DevOps Portfolio

This is a modern, responsive portfolio website built with React, Vite, and Framer Motion, tailored for a DevOps engineer profile.

## Features

- **DevOps Design**: Dark mode theme with terminal-style visualizations.
- **Responsive**: Works perfectly on mobile, tablet, and desktop.
- **Dynamic Content**: All data is stored in `src/data/resume.js` for easy updates.
- **Performant**: Built with Vite for fast loading.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Locally**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Important: Resume Setup

To make the "Download Resume" button work:

1.  Rename your actual resume PDF file to `resume.pdf`.
2.  Place it inside the `public/` folder, replacing the current `resume.txt` placeholder.

## Customization

- **Update Data**: Edit `src/data/resume.js` to change your bio, skills, or projects.
- **Change Colors**: Edit `src/index.css` to modify the CSS variables (colors, fonts).
