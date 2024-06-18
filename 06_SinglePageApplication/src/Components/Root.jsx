import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function Root() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default Root;
