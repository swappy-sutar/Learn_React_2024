import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState("");
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  const increment1 = () => {
    setCount1(count1 + 1);
  };

  const increment2 = () => {
    setCount2(count2 + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      const jsonString = JSON.stringify(data);
      setUser(jsonString);
    };

    fetchData();
  }, [count1, count2]);

  return (
    <>
      <p>1: {count1}</p>
      <button onClick={increment1}>increment </button>
      <br />
      <p>2: {count2} </p>
      <button onClick={increment2}>increment </button>
      <br />
      {user}
    </>
  );
}

export default App;
