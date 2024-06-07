import React from "react";

function UserCard(props) {
  return (
    <div>
      <h2>User Card</h2>
      <p>name : {props.name} </p>
      <p>email : {props.email} </p>
      <p>avatar : </p>
      <img
        src={props.avatar}
        alt={`${props.name}'s avatar`}
        style={{ width: "100px", height: "100px" }}
      />
      <button className="button">click</button>
    </div>
  );
}

export default UserCard;
