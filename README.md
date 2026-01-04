# 🗂️ Kanban Project Management Tool

A modern **Kanban-style project management application** built with **React** and **Tailwind CSS**.  
This project is designed to evolve into a **full-featured project management system**, including backend services, authentication, and real-time collaboration.

---

### Kanban Board
![Kanban Board](public/screenshots/kanban-board.png)



## ✨ Features (Current)

- 📌 Kanban board with multiple columns (Backlog, In Progress, Done)
- ➕ Add tasks to the Backlog column
- ✏️ Modify existing tasks (title, subtitle, priority)
- 🗑️ Delete tasks
- 🔼 Move tasks between columns
- 🎯 Priority levels (Low / Medium / High)
- 🎨 Clean and responsive UI
- ⚛️ Built using React functional components and hooks

---

## 🚧 Planned Features (Roadmap)

This project is actively being developed and will grow into a complete project management tool:

- 🔐 User authentication (login / signup)
- 🧠 Backend API (Node.js / Express or similar)
- 🗄️ Database integration (PostgreSQL / MongoDB)
- 👥 Multi-user collaboration
- 🔄 Real-time updates (WebSockets)
- 🗂️ Projects & workspaces
- 🏷️ Labels, comments, and attachments
- 📊 Task analytics & progress tracking
- 🌙 Dark mode
- 🧪 Testing (unit & integration)

---

## 🛠️ Tech Stack

### Frontend
- **React**
- **Tailwind CSS**
- **Headless UI**
- **Heroicons**
- **Vite**

### Planned Backend
- Node.js
- Express / NestJS
- REST or GraphQL API
- Authentication (JWT / OAuth)
- Database (TBD)

---

## 📁 Project Structure

src/
├── Components/
│ ├── KanbanColumn.jsx
│ ├── KanbanCard.jsx
│ ├── AddTaskForm.jsx
│ ├── ModifyTaskForm.jsx
│ ├── DropDownButton.jsx
│ └── Sidebar.jsx
├── App.jsx
├── main.jsx
└── index.css



---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/NabilHaddad-Ai/Project-management-tool.git
cd kanban-board
npm install

```

Run the development server

```bash
npm run dev


The app will be available at:
```

http://localhost:5173

## 🧠 Design Principles

- **Single source of truth** for application state  
- **Lifted state management** to enable cross-component interaction  
- **Controlled components** for predictable and reliable UI behavior  
- **Scalable architecture** designed for future backend integration  
- **Clean, readable, and maintainable codebase**

---

## 📌 Project Status

🟡 **Frontend under active development**  
Backend services and advanced features are planned for future releases.

---

## 🤝 Contributing

Contributions are welcome and appreciated.

1. Fork the repository  
2. Create a new feature branch (`feature/your-feature`)  
3. Commit your changes  
4. Open a Pull Request  

---

## 📄 License

This project is licensed under the **MIT License**.






