import React, { useState, Fragment } from "react";
import ResultBox from "./ResultBox";
import SearchBox from "../Components/SearchBox/SearchBox";
import BackGroundHome from "../Components/UI/BackgroundHome";

function RecipeFinderMain(props) {
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
    setSearchId(Math.random().toFixed(8).toString())
    setSearchInfo(["", "random"]);
    setResultVisibility(true);
  };

  const closeResult = () => {
    setResultVisibility(false);
    setInputValue("");
  };

  const resultBoxIsOn = resultVisibility && (
    <ResultBox
      searchText={searchInfo[0]}
      apiRequestMethod={searchInfo[1]}
      closeBox={closeResult}
      searchId={searchId}
    />
  );

  return (
    <Fragment>
      <SearchBox
        value={inputValue}
        changed={handleInput}
        clickSearch={getSearch}
        clickRandom={getRandom}
      />
      <BackGroundHome />
      {resultBoxIsOn}
    </Fragment>
  );
}

export default RecipeFinderMain;