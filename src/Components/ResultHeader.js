import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Button from "./Button";

const CloseBtn = (
  <FontAwesomeIcon icon={faWindowClose} color={"#fdfdfd"} size={"lg"} />
);

const style = {
  border: "none",
  borderRadius: "8px 8px 0 0",
};

function ResultHeader(props) {
  return (
    <Header customStyle={style}>
      <p>Your results</p>
      <Button
        type={"button"}
        name={CloseBtn}
        color={"var(--color5)"}
        hoverColor={"var(--color5)"}
        clicked={props.closeResult}
      />
    </Header>
  );
}

export default ResultHeader;
