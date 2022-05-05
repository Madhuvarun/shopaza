import React from "react";
import Header from "../components/Header";

function HomeScreen(props) {
  return (
    <div className="home_page">
      <Header />
      <div className="blockbuster_deals"></div>
    </div>
  );
}

export default HomeScreen;
