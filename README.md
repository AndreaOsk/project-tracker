##Project Tracker (React)

A project tracking application built with React.
The app allows users to manage projects, track associated actions, and persist progress using browser storage.

#✨ Features

- View a list of projects with status
- Select a project to view details
- Track actions (tasks) per project
- Toggle action completion
- Persistent state using localStorage
- Component-scoped styling with CSS Modules

#🛠 Tech Stack

- React (Vite)
- JavaScript (ES6+)
- CSS Modules
- localStorage for persistence

#📁 Project Structure

```bash
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

#🚀 Getting Started

Prerequisites

- Node.js (v18+ recommended)
- npm

Installation

```bash
git clone https://github.com/AndreaOsk/project-tracker.git
cd project-tracker
npm install
npm run dev
```

#💾 Data Persistence

Projects and actions are stored in the browser using localStorage.
Refreshing the page will not reset progress.

#🧠 Data Model

The application is built around a small, stable data model designed to be easy to reason about and extend.

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

State & Flow

- All project data is stored in a single source of truth (projectsState) in App.jsx.
- Child components receive data via props and request updates through callback functions.
- The currently selected project is derived from state using its id, avoiding duplicated state and sync issues.

Defaults & Validation

- New projects are always created with a default status ("Agreement Accepted").
- Project status cannot be set during creation; this business rule is enforced centrally.
- Data loaded from localStorage is normalised to ensure it matches the expected shape, with safe defaults applied where needed.
- On first run, a small set of demo projects is loaded for portfolio and demonstration purposes.

#🎯 Roadmap / Planned Improvements

- Visual highlight for selected project
- Action creation UI improvements
- Due dates and labels
- Drag and drop
- Filtering by status
- TypeScript migration
- Deployment (Vercel)
- Improved accessibility and keyboard navigation

#👩‍💻 Author

Andrea Eliasdottir

- Background in Media Design and CAD
- Project Manager in the utility sector
- Transitioning into frontend development

GitHub: https://github.com/AndreaOsk

#📄 License

This project is for learning and portfolio purposes.
