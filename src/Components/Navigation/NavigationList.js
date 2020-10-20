import React from "react";
import styled from "styled-components";
import NavigationItem from "./NavigationItem";

const ListStyled = styled.ul`
  display: flex;
  flex-flow: column;
  list-style-type: none;
`;

function NavigationList(props) {
  const navList = props.menuList.map((item, index) => {
    return (
      <NavigationItem
        key={`nav-${index}`}
        text={item}
        clicked={() => {
          props.searchByCategory(item);
          props.closeSideDrawer();
        }}
      />
    );
  });

  return <ListStyled>{navList}</ListStyled>;
}

export default NavigationList;
