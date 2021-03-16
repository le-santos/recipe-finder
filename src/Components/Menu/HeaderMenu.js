import React from "react";
import HamburgerIcon from "../Icons/HamburgerIcon";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

const HeaderMenu = ({ clicked, searchByCategory }) => {
  return (
    <React.Fragment>
      <MenuMobile>
        <HamburgerIcon size={"2x"} color={"#fdfdfd"} clicked={clicked} />
      </MenuMobile>
      <MenuDesktop searchByCategory={searchByCategory} />
    </React.Fragment>
  );
};

export default HeaderMenu;
