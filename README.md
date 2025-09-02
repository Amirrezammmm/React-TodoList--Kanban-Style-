# React TodoList (Kanban Style) ✅

A task management app built with **React**.  
This project provides a simple **Kanban-style board** with drag-and-drop tasks, edit/delete options, and theme switching (light/dark).  
Tasks are stored in **localStorage** so they persist between sessions.

---

## ✨ Features

- ➕ **Add tasks** with a simple input form  
- ✏️ **Edit tasks** in a modal popup  
- ❌ **Delete tasks**  
- 📌 Three columns:
  - **To Do**
  - **In Progress**
  - **Done**
- 🖱️ **Drag & drop** tasks between columns  
- 🌙 **Dark / Light mode** toggle (saved in localStorage)  
- 💾 Tasks saved in **localStorage** for persistence  

---

## 🛠️ Technologies Used

- **React (Hooks: useState, useEffect)**
- **CSS3**
- **localStorage** for persistence

---

## 📂 Project Structure
project/
│
├── src/
│ ├── App.js # Main app logic
│ ├── App.css # Styling
│ │
│ ├── assets/
│ │ └── components/
│ │ ├── TodoColumn.js # Column component (drop zone)
│ │ ├── TodoItem.js # Single task item
│ │ └── EditModal.js # Modal for editing tasks
│ │
│ └── index.js # React entry point
│
└── README.md


---

## 🚀 How to Run

1. Clone or download this repository.
2. Install dependencies:

   ```bash
   npm install
3.Start the development server:
npm run dev

Open http://localhost:5000
 to see the app in your browser.

