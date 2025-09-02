import React from "react";

export default function TodoColumn({ title, children, className, isDropZone, onDrop }) {
  const handleDragOver = (e) => {
    e.preventDefault(); 
  };

  const handleDrop = () => {
    if (onDrop) onDrop();
  };

  return (
    <div
      className={className}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h3>{title}</h3>
      <div className="column-content">
        {children}
      </div>
    </div>
  );
}
