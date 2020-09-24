import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUtensils } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";

const BarsIcon = (
  <FontAwesomeIcon icon={faBars} color={"#fdfdfd"} size={"2x"} />
);
const UtensilsIcon = (
  <FontAwesomeIcon icon={faUtensils} color={"#fdfdfd"} size={"2x"} />
);

const style = {
  position: "fixed",
  top: "0",
  width: "100%",
  zIndex: "100",
};

function AppHeader(props) {
  return (
    <Header customStyle={style}>
      {BarsIcon}
      <h1>Recipe Finder App</h1>
      {UtensilsIcon}
    </Header>
  );
}

export default AppHeader;
