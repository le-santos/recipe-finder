import React from "react";
import styled from "styled-components";
import MenuLinkStyled from "../Menu/MenuLinkStyled";
import NavigationItem from "./NavigationItem";

const ListStyled = styled.ul`
  display: flex;
  flex-flow: column;
  list-style-type: none;
  @media (min-width: 600px) {
    display: none;
    position: absolute;
    left: 5%;
    top: 46px;
    background-color: var(--color1);
    box-shadow: 1px 1px 3px var(--color5);
    ${(props) => props.parent}:hover & {
      display: flex;
    }
  }
`;

function NavigationList(props) {
  const navList = props.menuList.map((item, index) => {
    return (
      <NavigationItem
        key={`nav-${index}`}
        text={item}
        clicked={() => {
          props.searchByCategory(item);
          if (props.parent !== MenuLinkStyled) {
            props.closeSideDrawer();
          }
        }}
      />
    );
  });

  return <ListStyled parent={props.parent}>{navList}</ListStyled>;
}

export default NavigationList;
