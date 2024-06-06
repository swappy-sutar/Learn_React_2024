import "./App.css";
import Demo from "./Demo";
function App() {
  let a = 5;

  return (
    <>
      <h1>hey i'm swappy</h1>
      <h3>nice to meet you</h3>
      <p>this is the variable a : {a}</p>
      <img className="img" src="public\images\cricket.jpg" alt="img" />

      <Demo />
    </>
  );
}

export default App;
