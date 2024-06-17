import { useState } from "react";

import "./App.css";
import Login from "./Login";
import Form from "./Form";
import Card from "./Card";

function App() {
  const [cards, setCards] = useState([]);

  const CardGenerator = (name, age) => {
    const newObj = {
      title: `${name}`,
      content: `${age}`,
    };
    setCards([...cards, newObj]);
  };
  return (
    <>
      {/* <Login /> */}
      <br />
      <p>Total cards are: {cards.length}</p>
      <br />
      <Form CardGenerator={CardGenerator} />

      <div className="card-container-2">
        {cards.map((card) => (
          <Card key={card.id} title={card.title} content={card.content} />
        ))}
      </div>
    </>
  );
}

export default App;
