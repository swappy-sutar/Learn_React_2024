import React, { useState } from "react";

function ChildComponent({ parentFunction }) {
  const [data, setData] = useState("");

  const sendDataToParent = () => {
    parentFunction(data);
  };

  return (
    <div className="child-component">
      <h2>Child Component</h2>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <br />
      <br />
      <button onClick={sendDataToParent}>Send Data to Parent</button>
      <br />
      <br />
    </div>
  );
}

export default ChildComponent;
