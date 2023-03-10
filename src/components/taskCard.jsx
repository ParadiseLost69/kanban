import React from "react";
import "./taskCard.css";

export default function TaskCard({ children, title, handleDragStart }) {
  return (
    <div
      className="draggable card"
      draggable={true}
      onDragStart={(e) => handleDragStart(e)}
    >
      <h2>{title}</h2>
      {children}
    </div>
  );
}
