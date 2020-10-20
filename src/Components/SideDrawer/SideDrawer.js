import React from "react";
import styled from "styled-components";
import CloseIcon from "../Icons/CloseIcon";
import Backdrop from "../UI/Backdrop";
import NavigationList from "../Navigation/NavigationList";
import Header from "../UI/Header";

const SideNavStyled = styled.nav`
  position: fixed;
  top: 0;
  left: ${props => props.changeLeftPosition};
  height: 100%;
  width: 250px;
  max-width: 60%;
  background-color: var(--color2);
  z-index: 200;
  transition: left 0.5s;
`

function SideDrawer(props) {

  const moveDrawer = () => {
    return (
      (props.isSideDrawerVisible) ? "0px" : "-500px"
    )
  }
 
  const headerStyle = {
    backgroundColor: "var(--color2)",
    color: "var(--color5)"
  }

  return (
    <React.Fragment>
      <Backdrop 
        clicked={props.closeSideDrawer} 
        isBackdropVisible={props.isSideDrawerVisible}
        customZindex={"100"}
        />
      <SideNavStyled changeLeftPosition={moveDrawer}>
        <Header customStyle={headerStyle}>
          <h3>Recipes by category</h3>
          <span style={{"float": "right", "fontSize": "2em", cursor: "pointer"}}>
            <CloseIcon  size={"sm"} clicked={props.closeSideDrawer}/>
          </span>
        </Header>
        <NavigationList 
          menuList={props.menuList} 
          searchByCategory={props.searchByCategory}
          closeSideDrawer={props.closeSideDrawer}
          />
      </SideNavStyled>
    </React.Fragment>
  )
}

export default SideDrawer;