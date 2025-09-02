import React, { useState } from "react";

export default function EditModal({ task, onSave, onCancel }) {
  const [input, setInput] = useState(task.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSave(input.trim());
    }
  };

  return (
    <div className="modal-backdrop" onClick={onCancel}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>ویرایش تسک</h3>
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
          <div className="modal-buttons">
            <button type="submit">✅ ذخیره</button>
            <button type="button" onClick={onCancel}>❌ لغو</button>
          </div>
        </form>
      </div>
    </div>
  );
}
