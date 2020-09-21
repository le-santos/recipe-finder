import React from "react";
import AppHeader from "./Components/AppHeader";
import SearchBox from "./Components/SearchBox";
import BackGroundHome from "./Components/BackgroundHome";
import ResultBox from "./Components/ResultBox";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <SearchBox />
      <BackGroundHome />
      <ResultBox />
    </div>
  );
}

export default App;
