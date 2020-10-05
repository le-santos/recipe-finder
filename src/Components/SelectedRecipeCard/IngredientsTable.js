import React from "react";
import styled from "styled-components";

const TableStyled = styled.table`
  display: block;
  border-collapse: collapse;
  padding: 8px;
  text-align: center;
  & td,
  th {
    border: 2px solid var(--color1);
    padding: 10px;
  }
`;

function IngredientsTable(props) {
  // Filter entries with key "Ingredient" or "Measure" that has a truthy value
  // and avoid catching blank strings values with trim()
  const ingredients = Object.entries(props.recipeSelected).filter(
    (item) => item[0].includes("Ingredient") && item[1] && item[1].trim()
  );

  const ingredientsMeasures = Object.entries(props.recipeSelected).filter(
    (item) => item[0].includes("Measure") && item[1] && item[1].trim()
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
