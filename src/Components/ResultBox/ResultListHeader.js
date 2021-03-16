import React from "react";
import Header from "../UI/Header";
import Button from "../UI/Button";
import CloseIcon from "../Icons/CloseIcon";

const style = {
  border: "none",
  borderRadius: "8px 8px 0 0",
};

function ResultListHeader({ closeResult }) {
  return (
    <Header customStyle={style}>
      <p>Your results</p>
      <Button
        type={"button"}
        color={"var(--color5)"}
        hoverColor={"var(--color5)"}
        clicked={closeResult}
      >
        <CloseIcon color={"var(--color1)"} size={"lg"} />
      </Button>
    </Header>
  );
}

export default ResultListHeader;
