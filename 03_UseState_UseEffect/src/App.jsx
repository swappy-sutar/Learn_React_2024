import { useState } from "react";
import Card from "./Card";
import "./App.css";
import ChildComponent from "./ChildComponent";

function App() {
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState([
    // { id: 1, title: "Card 1", content: "Content 1" },
  ]);
  const [childData, setChildData] = useState("No Data");

  function incrementCount() {
    setCount(count + 1);
  }

  const CardGenerator = () => {
    const newCard = {
      id: cards.length + 1,
      title: `Card ${cards.length + 1}`,
      content: `Content ${cards.length + 1}`,
    };
    setCards([...cards, newCard]);
  };

  const parentFunction = (dataByChild) => {
    setChildData(dataByChild);
  };

  return (
    <>
      <div className="parent-component">
        <h2>Parent Component</h2>
        <p>Received data from child: "{childData}"</p>
        <hr />
        <ChildComponent parentFunction={parentFunction} />
      </div>
      <br />
      <hr />
      <br />
      <button onClick={incrementCount}>Increment Count {count}</button>
      <br />
      <br />
      <button onClick={CardGenerator}>Add Card</button>
      <p>Total cards are: {cards.length}</p>
      <div className="card-container-2">
        {cards.map((card) => (
          <Card key={card.id} title={card.title} content={card.content} />
        ))}
      </div>
    </>
  );
}

export default App;
