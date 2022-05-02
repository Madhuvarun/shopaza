import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import UserLogin from "./components/UserLogin";
import UserSignup from "./components/UserSignup";

function App() {
  return (
    <div className="App">
      <UserLogin />
    </div>
  );
}

export default App;
