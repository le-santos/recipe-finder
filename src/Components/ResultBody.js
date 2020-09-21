import React from "react";
import styled from "styled-components";
import RecipeListCard from "./RecipeListCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadCry } from "@fortawesome/free-solid-svg-icons";

const DivResultList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: var(--color1);
  border: none;
  border-radius: 0 0 8px 8px;
  box-shadow: 2px 2px 6px var(--color5);
`;

const sadIcon = (
  <FontAwesomeIcon icon={faSadCry} size={"3x"} color={"var(--color5)"} />
);

function ResultBody(props) {
  const results =
    props.recipeList.length > 0 ? (
      props.recipeList.map((item, index) => {
        return (
          <RecipeListCard
            key={item.idMeal}
            src={item.strMealThumb}
            alt={`${item.strMeal}-recipe-photo`}
            recipeName={item.strMeal}
            selectCard={props.cardSelected}
          />
        );
      })
    ) : (
      <div style={{ margin: "1em", textAlign: "center" }}>
        <h2>Sorry, there's no recipe </h2>
        {sadIcon}
      </div>
    );

  return <DivResultList>{results}</DivResultList>;
}

export default ResultBody;
