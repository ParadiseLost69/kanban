import { useState } from "react";
import "./App.css";

function App() {
  const [dragActive, setDragActive] = useState(false);
  let dragged = null;

  function handleDragStart(e) {
    //timeout to have the element display = none but dragged item still visible
    setTimeout(() => {
      e.target.style.display = "none";
    }, 5);
    dragged = e.target;
    dragged.addEventListener("dragend", function () {
      if (!dragged.parentNode.classList.contains("column")) {
        dragged.style.display = "block";
      }
    });
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    e.preventDefault();
    dragged.style.display = "block";

    if (e.target.className === "column-1") {
      e.target.appendChild(dragged);
    }
    if (e.target.className === "column-2") {
      e.target.appendChild(dragged);
    }
  }

  return (
    <div className="App">
      <div
        className="column-1"
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
      >
        <div
          className="draggable card"
          draggable={true}
          onDragStart={(e) => handleDragStart(e)}
          onDrop={(e) => e.preventDefault}
        >
          <h1>Item</h1>
          <h2>task</h2>
        </div>
        <div
          className="draggable card"
          draggable={true}
          onDragStart={(e) => handleDragStart(e)}
        >
          <h1>Item 2</h1>
          <h2>Task 2</h2>
        </div>
      </div>

      <div
        className="column-2"
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
      ></div>
      <div
        className="column-2"
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
      ></div>
    </div>
  );
}

export default App;
