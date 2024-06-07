import React from "react";

function UserCardMap() {
  const card = [
    { id: 1, title: "title: 1", content: "content : 1" },
    { id: 2, title: "title: 2", content: "content : 2" },
    { id: 4, title: "title: 4", content: "content : 4" },
    { id: 5, title: "title: 5", content: "content : 5" },
    { id: 6, title: "title: 6", content: "content : 6" },
    { id: 7, title: "title: 7", content: "content : 7" },
  ];

  return (
    <>
      <div className="card-container-1">
        {card.map((card) => {
          return (
            <div key={card.id} className="card-1">
              <h3>{card.title}</h3>
              <p>{card.content} </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UserCardMap;
