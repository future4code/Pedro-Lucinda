import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`;

export const H4 = styled.h4`
  font-size: 1.8rem;
  font-weight: bold;

  text-decoration: none;
  outline: none;

  color: var(--dark-grey);
`;

export const A = styled.a`
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--dark-grey);
  text-decoration: none;
  outline: none;

  :hover {
    color: var(--green);
    transition: ease-in-out 0.3s;
    cursor: pointer;
  }
`;

export const P = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
`;
