import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function HamburguerIcon(props) {
  return <FontAwesomeIcon icon={faBars} color={props.color} size={props.size} />
};

export default HamburguerIcon;