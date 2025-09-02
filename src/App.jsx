import React, { useState, useEffect } from "react";
import TodoColumn from "./assets/components/TodoColumn";
import TodoItem from "./assets/components/TodoItem";
import EditModal from "./assets/components/EditModal";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [draggedId, setDraggedId] = useState(null);
  const [editingTodo, setEditingTodo] = useState(null);
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), title: input, status: "todo" }]);
    setInput("");
  };

  const handleDragStart = (id) => setDraggedId(id);

  const handleDrop = (targetStatus) => {
    setTodos(todos.map((t) =>
      t.id === draggedId ? { ...t, status: targetStatus } : t
    ));
    setDraggedId(null);
  };

  const handleEdit = (todo) => setEditingTodo(todo);

  const handleEditSave = (newTitle) => {
    setTodos(todos.map((t) =>
      t.id === editingTodo.id ? { ...t, title: newTitle } : t
    ));
    setEditingTodo(null);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const columns = [
    { key: "todo", title: "📌 وظایف", className: "todo" },
    { key: "in-progress", title: "🚧 درحال انجام", className: "inprogress" },
    { key: "done", title: "✅ انجام شده", className: "done" },
  ];

  return (
    <div className={`app-container ${theme}`}>
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <h2>🧠 مدیریت وظایف</h2>

      <form className="todo-input-form" onSubmit={handleAdd}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="تسک جدید..."
        />
        <button type="submit">➕</button>
      </form>

      <div className="columns-container">
        {columns.map((col) => (
          <TodoColumn
            key={col.key}
            title={col.title}
            className={`column ${col.className}`}
            onDrop={() => handleDrop(col.key)}
            isDropZone
          >
            {todos
              .filter((t) => t.status === col.key)
              .map((todo) => (
                <TodoItem
                  key={todo.id}
                  item={todo}
                  onDragStart={handleDragStart}
                  onEdit={() => handleEdit(todo)}
                  onDelete={() => handleDelete(todo.id)}
                />
              ))}
          </TodoColumn>
        ))}
      </div>

      {editingTodo && (
        <EditModal
          task={editingTodo}
          onSave={handleEditSave}
          onCancel={() => setEditingTodo(null)}
        />
      )}
    </div>
  );
}
