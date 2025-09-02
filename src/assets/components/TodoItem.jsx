import React from "react";

export default function TodoItem({ item, onDragStart, onEdit, onDelete }) {
  return (
    <div
      className={`todo-item ${item.status === "done" ? "done-task" : ""}`}
      draggable
      onDragStart={() => onDragStart(item.id)}
    >
      <span>{item.title}</span>
      <div className="todo-buttons">
        <button onClick={onEdit}>🖊️</button>
        <button onClick={onDelete}>❌</button>
      </div>
    </div>
  );
}
