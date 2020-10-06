import React, { useState, useEffect, Fragment } from "react";
import ResultBox from "./ResultBox";
import SearchBox from "../Components/SearchBox/SearchBox";
import BackGroundHome from "../Components/UI/BackgroundHome";

function RecipeFinderMain(props) {
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [requestType, setRequestType] = useState("");
  const [resultVisibility, setResultVisibility] = useState(false);

  useEffect(() => {
    return () => {
      if (inputValue === "") {
        // Clean up function
        setRequestType("");
      }
    };
  }, [inputValue]);

  const handleInput = (e) => {
    let value = e.target.value;
    setInputValue(value);
  };

  const getSearch = () => {
    if (inputValue.trim()) {
      setSearchValue(inputValue);
      setResultVisibility(true);
      setRequestType("search");
      setInputValue("");
    } else {
      setInputValue("");
    }
  };

  const getRandom = () => {
    setResultVisibility(true);
    setRequestType("random");
    setInputValue("");
  };

  const closeResult = () => {
    setResultVisibility(false);
    setRequestType("");
    setInputValue("");
    setSearchValue("");
  };

  const resultBoxIsOn = resultVisibility && (
    <ResultBox
      searchText={searchValue}
      apiRequestMethod={requestType}
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
