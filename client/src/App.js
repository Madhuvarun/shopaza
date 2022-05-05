import "./App.css";

import UserLogin from "./components/UserLogin";
import UserSignup from "./components/UserSignup";
import HomeScreen from "./screens/HomeScreen";

import { Routes, Route } from "react-router-dom";
import SearchScreen from "./screens/SearchScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/search" element={<SearchScreen />} />
      </Routes>
    </div>
  );
}

export default App;
