import React from "react";
import styled from "styled-components";

const TableStyled = styled.table`
  display: block;
  text-align: center;
  & th {
    color: blue;
  }
`;

function IngredientsTable(props) {
  const ingredients = Object.entries(props.recipeSelected).filter(
    (item) => item[0].includes("Ingredient") && item[1] !== ""
  );

  const ingredientsMeasures = Object.entries(props.recipeSelected).filter(
    (item) => item[0].includes("Measure") && item[1] !== " " && item[1] !== ""
  );

  const makeTable = (ingr, measure) => {
    return ingr.map((item, index) => (
      <tr key={`ingredients-${index}`}>
        <td>{item[1]}</td>
        <td>{measure[index][1]}</td>
      </tr>
    ));
  };

  return (
    <TableStyled>
      <tbody>
        <tr key={"ingredients-table-head"}>
          <th>{"Ingredient"}</th>
          <th>{"Measure"}</th>
        </tr>
        {makeTable(ingredients, ingredientsMeasures)}
      </tbody>
    </TableStyled>
  );
}

export default IngredientsTable;
