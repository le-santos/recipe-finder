import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [resultVisibility, setResultVisibility] = useState(false);
  const [searchInfo, setSearchInfo] = useState(["", ""]);
  const [searchId, setSearchId] = useState("");

  const handleInput = (e) => {
    let value = e.target.value;
    setInputValue(value);
  };

  const getSearch = () => {
    if (inputValue.trim()) {
      setResultVisibility(true);
      setSearchInfo([inputValue, "search"]);
      setInputValue("");
    } else {
      setInputValue("");
    }
  };

  const getRandom = () => {
    setSearchId(Math.random().toFixed(8).toString());
    setSearchInfo(["", "random"]);
    setResultVisibility(true);
  };

  const getCategoryList = (category) => {
    setSearchInfo([category, "byCategory"]);
    setResultVisibility(true);
  };

  const closeResult = () => {
    setResultVisibility(false);
    setInputValue("");
    setSearchInfo(["", ""]);
    setSearchId("");
  };

  return (
    <Layout
      className="App"
      searchByCategory={getCategoryList}
      handleInput={handleInput}
      inputValue={inputValue}
      search={getSearch}
      randomSearch={getRandom}
      searchInfo={searchInfo}
      searchId={searchId}
      resultVisible={resultVisibility}
      closeResult={closeResult}
    />
  );
}

export default App;
