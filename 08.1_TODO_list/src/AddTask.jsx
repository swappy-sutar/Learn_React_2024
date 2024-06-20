import React, { useState } from "react";
import "./AddTask.css";

function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTask(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new task"
      />
      <button className="btn1" type="submit">
        Add Task
      </button>
    </form>
  );
}

export default AddTask;
