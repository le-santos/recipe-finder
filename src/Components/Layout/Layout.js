import React, { useState } from "react";
import AppToolbar from "../AppToolbar/AppToolbar";
import SideDrawer from "../SideDrawer/SideDrawer";
import GlobalStyle from "./GlobalStyle";

function Layout(props) {
  const [sideDrawerVisible, setSideDrawerVisible] = useState(false);

  const toggleMenu = () => {
    setSideDrawerVisible(!sideDrawerVisible);
  };

  const menuItems = [
    "Breakfast",
    "Pasta",
    "Chicken",
    "Beef",
    "Seafood",
    "Vegetarian",
    "Vegan",
    "Dessert",
    "Miscellaneous",
  ];

  return (
    <React.Fragment>
      <GlobalStyle />
      <AppToolbar toggleMenu={toggleMenu} />
      <SideDrawer
        menuList={menuItems}
        closeSideDrawer={toggleMenu}
        isSideDrawerVisible={sideDrawerVisible}
        isBackdropVisible={sideDrawerVisible}
        searchByCategory={props.searchByCategory}
      />
      <main>{props.children}</main>
    </React.Fragment>
  );
}

export default Layout;
