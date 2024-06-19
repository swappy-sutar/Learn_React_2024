import "./App.css";
import Dashboard from "./Components/Dashboard";
import UserInfoContext from "./Contexts/UserInfoContext";
function App() {
  return (
    <>
      <div className="app">
        <h1>User Dashboard</h1>
        <UserInfoContext>
          <Dashboard />
        </UserInfoContext>
      </div>
    </>
  );
}

export default App;
