import React, { useState, useEffect, Fragment } from "react";
import ResultBox from "./ResultBox";
import SearchBox from "../Components/SearchBox/SearchBox";
import BackGroundHome from "../Components/UI/BackgroundHome";

function RecipeFinderMain(props) {
  const [inputValue, setInputValue] = useState("");
  const [resultVisibility, setResultVisibility] = useState(false);
  const [searchInfo, setSearchInfo] = useState(["", ""]);

  useEffect(() => {});

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
    setResultVisibility(true);
    setSearchInfo(["", "random"]);
  };

  const cleanUpSearch = () => {
    setSearchInfo(["", ""]);
  };

  const closeResult = () => {
    setResultVisibility(false);
    setInputValue("");
    cleanUpSearch();
  };

  const resultBoxIsOn = resultVisibility && (
    <ResultBox
      searchText={searchInfo[0]}
      apiRequestMethod={searchInfo[1]}
      closeBox={closeResult}
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
