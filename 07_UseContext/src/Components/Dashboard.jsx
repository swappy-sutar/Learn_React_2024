import React from "react";
import User from "./UserCard";
import "../Components/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <User />
    </div>
  );
}

export default Dashboard;
