import React from "react";
import NavigationList from "../Navigation/NavigationList";
import MenuLinkStyled from "./MenuLinkStyled";

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

const MenuDesktop = ({ searchByCategory }) => {
  return (
    <React.Fragment>
      <MenuLinkStyled>
        Food Categories
        <NavigationList
          menuList={menuItems}
          searchByCategory={searchByCategory}
          parent={MenuLinkStyled}
        />
      </MenuLinkStyled>
    </React.Fragment>
  );
};

export default MenuDesktop;
