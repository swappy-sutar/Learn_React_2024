import React from "react";
import { useRef } from "react";
import "./Form.css";

function Form({ CardGenerator }) {
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const handleData = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    CardGenerator(name, age);
  };

  return (
    <div>
      <div className="form-container">
        <h2>Enter Details</h2>
        <form onSubmit={handleData}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" required ref={nameRef} />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input type="text" name="age" required ref={ageRef} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
