import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import UserLogin from "./components/UserLogin";
import UserSignup from "./components/UserSignup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/signup" element={<UserSignup />} />
      </Routes>
    </div>
  );
}

export default App;
