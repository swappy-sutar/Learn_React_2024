import UserCard from "./UserCard";
import UserCard2 from "./UserCard2";
import UserCardMap from "./UserCardMap";
import Card from "./Card";
import programmerAvatar from "./assets/programmer.jpg";
import "./App.css";

function App() {
  let name = "swapnil";
  let email = "swapnil@gmail.com";
  let number = 1;
  const cards = [
    { id: 1, title: "title: 1", content: "content : 1" },
    { id: 2, title: "title: 2", content: "content : 2" },
    { id: 4, title: "title: 4", content: "content : 4" },
    { id: 5, title: "title: 5", content: "content : 5" },
    { id: 6, title: "title: 6", content: "content : 6" },
    { id: 7, title: "title: 7", content: "content : 7" },
  ];

  // const CardGenerator = () => {
  //   cards.push({ title: "new Card", content: "new Content" });
  // };

  return (
    <>
      <UserCard name={name} email={email} avatar={programmerAvatar} />
      <UserCard2 number={number} />
      <UserCard2 number="2" />

      <UserCardMap />
      <div className="card-container-2">
        {cards.map((card) => {
          return (
            <Card key={card.id} title={card.title} content={card.content} />
          );
        })}
      </div>
      {/* <button onClick={CardGenerator}>New Card</button> */}
    </>
  );
}

export default App;
