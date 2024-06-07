import UserCard from "./UserCard";
import UserCard2 from "./UserCard2";
import UserCardMap from "./UserCardMap";
import programmerAvatar from "./assets/programmer.jpg";
import "./App.css";

function App() {
  let name1 = "swapnil";
  let email1 = "swapnil@gmail.com";
  let name = "swapnil";
  let email = "swapnil@gmail.com";
  let number = 1;
  return (
    <>
      <UserCard name={name} email={email} avatar={programmerAvatar} />
      <UserCard2 number={number} />
      <UserCard2 number="2" />
      <UserCardMap />
    </>
  );
}

export default App;
