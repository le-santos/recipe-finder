import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FavoriteContext } from "../../Context/FavoriteContext";

const DivCard = styled.div`
  margin: 1em;
  padding: 0.7em;
  max-width: min-content;
  background-color: var(--color2);
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 4px 1px;
`;

function RecipeListCard({ id, src, alt, recipeName, selectCard }) {
  const { toggleFavorite, isFavorite } = useContext(FavoriteContext);

  const handleToggleFavorite = () => {
    toggleFavorite(id, { name: recipeName, id: id, src: src });
  };

  const favorited = isFavorite(id);

  return (
    <DivCard id={id}>
      <img src={src} alt={alt} width={"200px"} height={"auto"} />
      <h3>{recipeName}</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          type={"button"}
          name={"Recipe Details"}
          id={"details"}
          clicked={selectCard}
          color={"var(--color5)"}
          hoverColor={"var(--color2)"}
        />
        <FontAwesomeIcon
          icon={faHeart}
          color={"var(--color4)"}
          size={"lg"}
          onClick={handleToggleFavorite}
          style={{ cursor: "pointer", alignSelf: "center" }}
          beat={favorited}
        />
      </div>
    </DivCard>
  );
}

export default RecipeListCard;
