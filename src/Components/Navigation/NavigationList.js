import React from "react";
import styled from "styled-components";
import NavigationItem from "./NavigationItem";

const NavStyled = styled.a`
  display: flex;
  flex-flow: column;
`

function NavigationList(props) {

  const navList = props.menuList.map((item) => {
    return (
      <NavigationItem text={item}/>
    )
  })

  return (
    <NavStyled>
      {navList}
    </NavStyled>
  )
}

export default NavigationList;