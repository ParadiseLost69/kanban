import Column from "./components/column";
import "./App.css";
import { useState } from "react";
import TaskCard from "./components/taskCard";

function App() {
  const [tasks, setTasks] = useState([
    { title: "First Task", content: "Do something this weekend" },
    { title: "Second Task", content: "Finish the assignment" },
    { title: "Third Task", content: "Buy milk and eggs" },
  ]);
  let dragged = null;

  function handleDragStart(e) {
    //timeout to have the element display = none but dragged item still visible
    setTimeout(() => {
      e.target.style.display = "none";
    }, 5);

    //set variable so later I can change display back to block
    dragged = e.target;
    dragged.addEventListener("dragend", function () {
      dragged.style.display = "block";
    });
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    //prevent files from opening if dragged
    e.preventDefault();
    dragged.style.display = "block";
    if (e.target.className === "column") {
      e.target.appendChild(dragged);
    }
  }

  return (
    <div className="App">
      <Column
        title={"To-do"}
        handleDrop={handleDrop}
        handleDragOver={handleDragOver}
      ></Column>

      <Column
        title={"Doing"}
        handleDrop={handleDrop}
        handleDragOver={handleDragOver}
      >
        {tasks.map((task) => {
          return (
            <TaskCard title={task.title} handleDragStart={handleDragStart}>
              <p>{task.content}</p>
            </TaskCard>
          );
        })}
      </Column>
      <Column
        title={"Done"}
        handleDrop={handleDrop}
        handleDragOver={handleDragOver}
      ></Column>
    </div>
  );
}

export default App;
