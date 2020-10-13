import React from "react";
import styled from "styled-components";
import CloseIcon from "../Icons/CloseIcon";
import UtensilsIcon from "../Icons/UtensilsIcon";
import Backdrop from "../UI/Backdrop";
import NavigationList from "../Navigation/NavigationList";

const SideDivStyled = styled.div`
  position: fixed;
  top: 0;
  left: ${props => props.changeLeftPosition};
  height: 100%;
  width: 250px;
  max-width: 60%;
  background-color: var(--color2);
  z-index: 200;
  padding: 1em 0.5em;
  transition: left 0.5s;
`

function SideDrawer(props) {

  const moveDrawer = () => {
    return (
      (props.isSideDrawerVisible) ? "0px" : "-500px"
    )
  }
  

  return (
    <React.Fragment>
      <Backdrop clicked={props.closeSideDrawer} isBackdropVisible={props.isSideDrawerVisible}/>
      <SideDivStyled changeLeftPosition={moveDrawer}>
        <UtensilsIcon size={"2x"} color={"var(--color5)"} />
        <span style={{"float": "right", "fontSize": "2em", cursor: "pointer"}}>
          <CloseIcon color={"var(--color5)"} size={"sm"} clicked={props.closeSideDrawer}/>
        </span>
        <NavigationList menuList={props.menuList} />
      </SideDivStyled>
    </React.Fragment>
  )
}

export default SideDrawer;