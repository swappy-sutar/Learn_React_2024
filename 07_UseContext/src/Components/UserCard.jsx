import React from "react";
import { useContext } from "react";
import UserContext from "../Contexts/UserContext";

function UserCard() {
  const pointer = useContext(UserContext);

  return (
    <div>
      <div className="user-card" style={{ border: "2px solid red" }}>
        <h3>User Card</h3>
        <p>Name:{pointer.user.name} </p>
        <p>Email:{pointer.user.email} </p>
        <p>Age:{pointer.user.age} </p>
        <button onClick={pointer.changeUser}>change User</button>
      </div>
    </div>
  );
}

export default UserCard;
