import styled from "styled-components";

export const Icon = styled.img`
  width: 25px;
  height: 25px;

  outline: none;

  :hover {
    transform: scale(0.95, 0.95);
    transition: ease-in-out 0.3s;
    cursor: pointer;
  }
`;
