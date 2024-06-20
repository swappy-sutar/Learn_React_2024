import React, { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Learn React", completed: false },
  { id: 1, text: "Learn GitHub", completed: false },
  { id: 2, text: "Learn Blockchain", completed: false },
];

const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "added":
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "updated":
      return tasks.map((task) =>
        task.id === action.task.id ? action.task : task
      );
    case "deleted":
      return tasks.filter((task) => task.id !== action.id);
    default:
      return tasks;
  }
};

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  };

  const handleChangeTask = (updatedTask) => {
    dispatch({
      type: "updated",
      task: updatedTask,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };

  return (
    <>
      <h1>To-Do List</h1>
      <p>by Swappy</p>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onChangeTask={handleChangeTask}
      />
    </>
  );
}

export default App;
