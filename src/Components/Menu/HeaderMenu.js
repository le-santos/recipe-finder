import React from "react";
import HamburgerIcon from "../Icons/HamburgerIcon";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

const HeaderMenu = (props) => {
  return (
    <React.Fragment>
      <MenuMobile>
        <HamburgerIcon size={"2x"} color={"#fdfdfd"} clicked={props.clicked} />
      </MenuMobile>
      <MenuDesktop searchByCategory={props.searchByCategory} />
    </React.Fragment>
  );
};

export default HeaderMenu;
