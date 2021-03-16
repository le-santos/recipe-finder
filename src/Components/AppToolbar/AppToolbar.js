import React from "react";
import Header from "../UI/Header";
import UtensilsIcon from "../Icons/UtensilsIcon";
import HeaderMenu from "../Menu/HeaderMenu";

const style = {
  position: "fixed",
  top: "0",
  width: "100%",
  zIndex: "100",
  padding: "0.5em 5%",
};

function AppToolbar({ toggleMenu, searchByCategory }) {
  return (
    <Header customStyle={style}>
      <HeaderMenu clicked={toggleMenu} searchByCategory={searchByCategory} />
      <h1>Recipe Finder</h1>
      <UtensilsIcon size={"2x"} color={"#fdfdfd"} />
    </Header>
  );
}

export default AppToolbar;
