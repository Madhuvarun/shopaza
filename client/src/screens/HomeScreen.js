import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function HomeScreen(props) {
  const [searchString, setSearchString] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    setSearchString(e.target.value);
  }
  function searchOnClick(e) {
    navigate(`/search?text=${searchString}`);
  }

  return (
    <div className="home_page">
      <Header handleSearch={handleSearch} searchOnClick={searchOnClick} />
    </div>
  );
}

export default HomeScreen;
