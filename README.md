# Project Tracker (React)

A simple, clean project tracking application built with React.  
The app allows users to view projects, track associated actions, and persist progress using browser storage.

---

## ✨ Features

- View a list of projects with status
- Select a project to see its details
- Track actions (tasks) per project
- Toggle action completion
- Persistent state using `localStorage`
- Clean, component-scoped styling using CSS Modules

---

## 🛠 Tech Stack

- **React** (Vite)
- **JavaScript (ES6+)**
- **CSS Modules**
- **localStorage** for persistence

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── ProjectList.jsx
│   ├── ProjectDetail.jsx
│   ├── ActionList.jsx
│   ├── AddActionForm.jsx
│   ├── ProjectList.module.css
│   └── ProjectDetail.module.css
├── App.jsx
├── App.module.css
└── main.jsx

```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
git clone https://github.com/AndreaOsk/project-tracker.git
cd project-tracker
npm install
npm run dev

```

💾 Data Persistence

Projects and actions are stored in the browser using localStorage.
Refreshing the page will not reset progress.

🎯 Roadmap / Planned Improvements

- Visual highlight for selected project
- Action creation UI improvements
- Project creation form
- TypeScript migration
- Deployment (Vercel)
- Improved accessibility and keyboard navigation

👩‍💻 Author

Andrea Eliasdottir

- Background in Media Design and CAD
- Currently working as a Project Manager in the water sector
- Transitioning into frontend development

GitHub: https://github.com/AndreaOsk

📄 License

This project is for learning and portfolio purposes.
