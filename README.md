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

#Data Model

The application is built around a small, stable data model designed to be easy to extend and reason about.

Core Entities

Project

```bash
{
  id: number
  name: string
  status: string
  actions: Action[]
}
```

Action

```bash
{
  id: number
  name: string
  completed: boolean
}
```

State & Data Flow

- All project data is stored in a single source of truth (projectsState) in App.jsx.
- Child components receive data via props and request changes through callback functions.
- The currently selected project is derived from state using its id, avoiding duplicated state and sync issues.

Defaults & Validation

- New projects are always created with a default status ("Agreement Accepted").
- Project status cannot be set during creation; this business rule is enforced centrally.
- Data loaded from localStorage is normalised to ensure it matches the expected shape, with safe defaults applied where needed.

Persistence

- Project data is persisted to localStorage.
- On first run, a small set of demo projects is loaded for demonstration purposes.
- Design Principles
- Single source of truth
- Clear ownership of business logic
- Predictable defaults
- Safe, incremental extensibility

👩‍💻 Author

Andrea Eliasdottir

- Background in Media Design and CAD
- Currently working as a Project Manager in the utility sector
- Transitioning into frontend development

GitHub: https://github.com/AndreaOsk

📄 License

This project is for learning and portfolio purposes.
