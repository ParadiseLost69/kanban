import React from "react";
import "./column.css";

export default function Column({
  children,
  handleDrop,
  handleDragOver,
  title,
}) {
  return (
    <div
      className="column"
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => handleDragOver(e)}
    >
      <h1 className="column-title">{title}</h1>
      {children}
    </div>
  );
}
