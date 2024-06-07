import React from "react";

function UserCard2(props) {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <h2>Card : {props.number} </h2>
          <p>
            <h4>info:</h4>
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </>
  );
}

export default UserCard2;
