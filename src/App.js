import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddToDo from "./components/AddToDo";
import TaskList from "./components/TaskList";

function App() {
  const [toDo, setToDo] = useState([]);
  const addToDoTask = (toDoTask) => {
    !toDo.find((task) => task.toDoTask.toUpperCase() === toDoTask.toUpperCase())
      ? setToDo(
          toDo.concat({ id: toDo.length, toDoTask, taskCompleted: false })
        )
      : alert("Alert!!! Task previously assigned!!!");
  };
  const setTaskCompleted = (taskId) => {
    setToDo(
      toDo.map((task) =>
        task.id === taskId
          ? { ...task, taskCompleted: !task.taskCompleted }
          : task
      )
    );
  };
  const updateTask = (editedTask, taskId) => {
    setToDo(
      toDo.map((task) =>
        taskId === task.id ? { ...task, toDoTask: editedTask } : task
      )
    );
  };
  const deleteTask = (taskId) => {
    setToDo(toDo.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <Header />
      <AddToDo addToDoTask={addToDoTask} />
      {toDo.map((task) => (
        <TaskList
          key={task.id}
          task={task}
          setTaskCompleted={() => setTaskCompleted(task.id)}
          updateTask={(editedTask) => updateTask(editedTask, task.id)}
          deleteTask={() => deleteTask(task.id)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
