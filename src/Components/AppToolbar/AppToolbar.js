import React from "react";
import Header from "../UI/Header";
import UtensilsIcon from "../Icons/UtensilsIcon";
import HeaderMenu from "../Menu/HeaderMenu";

const style = {
  position: "fixed",
  top: "0",
  width: "100%",
  zIndex: "100",
};

function AppToolbar(props) {
  return (
    <Header customStyle={style}>
      <HeaderMenu
        clicked={props.toggleMenu}
        searchByCategory={props.searchByCategory}
      />
      <h1>Recipe Finder App</h1>
      <UtensilsIcon size={"2x"} color={"#fdfdfd"} />
    </Header>
  );
}

export default AppToolbar;
