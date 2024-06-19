import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

function UserInfoContext({ children }) {
  const [user, setUser] = useState({
    name: "swapnil sutar",
    email: "sutarswapnil322@gmail.com",
    age: 23,
  });

  const changeUser = () => {
    setUser({
      name: "Sam sutar",
      email: "Sam@gmail.com",
      age: 21,
    });
  };

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserInfoContext;
