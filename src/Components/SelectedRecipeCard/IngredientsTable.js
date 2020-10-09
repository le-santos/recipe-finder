import React from "react";
import styled from "styled-components";

const TableStyled = styled.table`
  display: block;
  border-collapse: collapse;
  padding: 8px;
  text-align: center;
  & td,
  th {
    border: 2px solid var(--color2);
    padding: 10px;
  }
`;

function IngredientsTable(props) {
  // Filter entries with key "Ingredient" or "Measure"
  const ingredients = Object.entries(props.recipeSelected).filter((item) =>
    item[0].includes("Ingredient")
  );

  const ingredientsMeasures = Object.entries(
    props.recipeSelected
  ).filter((item) => item[0].includes("Measure"));

  //Filter truthy values in ingredients
  const makeTable = (ingr, measure) => {
    return ingr
      .filter((ingred) => ingred[1])
      .map((item, index) => (
        <tr key={`ingredients-${index}`}>
          <td>{item[1]}</td>
          <td>{measure[index][1]}</td>
        </tr>
      ));
  };

  return (
    <TableStyled>
      <thead>
        <tr key={"ingredients-table-head"}>
          <th>{"Ingredient"}</th>
          <th>{"Measure"}</th>
        </tr>
      </thead>
      <tbody>{makeTable(ingredients, ingredientsMeasures)}</tbody>
    </TableStyled>
  );
}

export default IngredientsTable;
