import React from "react";
import "./TaskList.css";

function TaskList({ tasks, onDeleteTask, onChangeTask }) {
  return (
    <div className="list">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => {
                onChangeTask({ ...task, completed: !task.completed });
              }}
            />
            <span className={task.completed ? "completed" : "not-completed"}>
              {task.text}
            </span>
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
