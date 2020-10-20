import React from "react";
import styled from "styled-components";
import NavigationItem from "./NavigationItem";

const NavStyled = styled.nav`
  display: flex;
  flex-flow: column;
`

function NavigationList(props) {

  const navList = props.menuList.map((item, index) => {
    return (
      <NavigationItem 
        key={`nav-${index}`} 
        text={item} 
        clicked={() => {
          props.searchByCategory(item);
          props.closeSideDrawer();
          }}/>
    )
  })

  return (
    <NavStyled>
      {navList}
    </NavStyled>
  )
}

export default NavigationList;