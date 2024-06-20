import { useReducer } from "react";
import "./App.css";

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "resrt":
        return { count: 0 };
      default:
        new Error("Invalid Action");
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  const resrt = () => {
    dispatch({ type: "resrt" });
  };

  return (
    <>
      <div className="app">
        <p>Count: {state.count} </p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={resrt}>resrt</button>
      </div>
    </>
  );
}

export default App;
