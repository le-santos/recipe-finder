import React from "react";
import styled from "styled-components";
import CloseIcon from "../Icons/CloseIcon";
import Backdrop from "../UI/Backdrop";
import NavigationList from "../Navigation/NavigationList";
import Header from "../UI/Header";

const SideNavStyled = styled.nav`
  position: fixed;
  top: 0;
  left: ${(props) => props.changeLeftPosition};
  height: 100%;
  width: 250px;
  max-width: 60%;
  background-color: var(--color2);
  z-index: 200;
  transition: left 0.5s;
`;

function SideDrawer({
  isSideDrawerVisible,
  closeSideDrawer,
  menuList,
  searchByCategory,
}) {
  const moveDrawer = () => {
    return isSideDrawerVisible ? "0px" : "-500px";
  };

  const headerStyle = {
    backgroundColor: "var(--color2)",
    color: "var(--color5)",
  };

  return (
    <React.Fragment>
      <Backdrop
        clicked={closeSideDrawer}
        isBackdropVisible={isSideDrawerVisible}
        customZindex={"100"}
      />
      <SideNavStyled changeLeftPosition={moveDrawer}>
        <Header customStyle={headerStyle}>
          <h3>Recipes by category</h3>
          <span style={{ float: "right", fontSize: "2em", cursor: "pointer" }}>
            <CloseIcon size={"sm"} clicked={closeSideDrawer} />
          </span>
        </Header>
        <NavigationList
          menuList={menuList}
          searchByCategory={searchByCategory}
          closeSideDrawer={closeSideDrawer}
        />
      </SideNavStyled>
    </React.Fragment>
  );
}

export default SideDrawer;
