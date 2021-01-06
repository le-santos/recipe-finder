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

const MenuDesktop = (props) => {
  return (
    <React.Fragment>
      <MenuLinkStyled>
        Recipe Categories
        <NavigationList
          menuList={menuItems}
          searchByCategory={props.searchByCategory}
          parent={MenuLinkStyled}
        />
      </MenuLinkStyled>
    </React.Fragment>
  );
};

export default MenuDesktop;
