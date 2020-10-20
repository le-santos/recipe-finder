import React, {useState} from "react";
import AppToolbar from "../AppToolbar/AppToolbar";
import SideDrawer from "../SideDrawer/SideDrawer";
import SearchBox from "../SearchBox/SearchBox";
import BackGroundHome from "../UI/BackgroundHome";
import ResultBox from "../../Containers/ResultBox";


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
    "Dessert", 
    "Miscellaneous"
  ] 

  const resultBoxIsOn = props.resultVisible && (
    <ResultBox
      searchText={props.searchInfo[0]}
      apiRequestMethod={props.searchInfo[1]}
      closeBox={props.closeResult}
      searchId={props.searchId}
    />
  );

  return (
    <React.Fragment>
      <AppToolbar toggleMenu={toggleMenu}/>
      <SideDrawer 
        menuList={menuItems}
        closeSideDrawer={toggleMenu} 
        isSideDrawerVisible={sideDrawerVisible} 
        isBackdropVisible={sideDrawerVisible} 
        searchByCategory={props.searchByCategory}
        />
      <main>
        <SearchBox
          value={props.inputValue}
          changed={props.handleInput}
          clickSearch={props.search}
          clickRandom={props.randomSearch}
        />
        <BackGroundHome />
        {resultBoxIsOn}
      </main>
    </React.Fragment>
  );
}

export default Layout;
