import styled from "styled-components";

const MenuLinkStyled = styled.a`
  padding: 0.5em 0;
  color: var(--color1);
  &:hover {
    color: var(--color5);
    background-color: var(--color1);
    cursor: pointer;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export default MenuLinkStyled;
