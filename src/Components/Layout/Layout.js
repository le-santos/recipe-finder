import React from "react";
import AppToolbar from "../AppToolbar/AppToolbar";

function Layout(props) {
  return (
    <React.Fragment>
      <AppToolbar />
      <main>{props.children}</main>
    </React.Fragment>
  );
}

export default Layout;
