import React from "react";
import Header from "../UI/Header";
import UtensilsIcon from "../Icons/UtensilsIcon";
import HamburgerIcon from "../Icons/HamburgerIcon";

const style = {
  position: "fixed",
  top: "0",
  width: "100%",
  zIndex: "100",
};

function AppToolbar(props) {
  return (
    <Header customStyle={style}>
      <HamburgerIcon size={"2x"} color={"#fdfdfd"} clicked={props.toggleMenu} />
      <h1>Recipe Finder App</h1>
      <UtensilsIcon size={"2x"} color={"#fdfdfd"} />
    </Header>
  );
}

export default AppToolbar;
