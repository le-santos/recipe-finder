import React, {useState} from "react";
import AppToolbar from "../AppToolbar/AppToolbar";
import SideDrawer from "../SideDrawer/SideDrawer";

function Layout(props) {
  const [sideDrawerVisible, setSideDrawerVisible] = useState(false);

  const toggleMenu = () => {
    setSideDrawerVisible(!sideDrawerVisible);
  }

  const menuItems = [
    "Breakfast", 
    "Pasta", 
    "Chicken", 
    "Beef", 
    "Seafood", 
    "Vegetarian", 
    "Vegan", 
    "Desserts", 
    "Miscelaneous"
  ] 

  return (
    <React.Fragment>
      <AppToolbar toggleMenu={toggleMenu}/>
      <SideDrawer 
        menuList={menuItems}
        closeSideDrawer={toggleMenu} 
        isSideDrawerVisible={sideDrawerVisible} 
        isBackdropVisible={sideDrawerVisible} />
      <main>{props.children}</main>
    </React.Fragment>
  );
}

export default Layout;
