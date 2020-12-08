import styled from "styled-components";

export const SendBtn = styled.button`
  width: 150px;
  height: 50px;

  background-color: var(--green);
  color: var(--light-grey);
  font-size: 1.6rem;
  font-weight: bold;

  outline: none;
  border: none;
  border-radius: 10px;
  margin-bottom: 50px;

  :hover {
    transform: scale(0.95, 0.95);
    transition: ease-in-out 0.3s;
    cursor: pointer;
    background: #f5f8fa;
    color: var(--green);
    border: 2px solid var(--green);
  }
`;

export const AcceptBtn = styled.button`
  color: var(--green);
  font-weight: bold;
  font-size: 1.6rem;

  background-color: var(--light-grey);
  border: none;
  border-radius: 10px;

  width: 70px;
  height: 40px;

  border: 2px solid var(--green);

  :hover {
    transform: scale(0.98, 0.98);
    transition: ease-in-out 0.2s;
    background: var(--green);
    color: var(--light-grey);
  }
`;

export const IgnoretBtn = styled.button`
  color: red;
  font-weight: bold;
  font-size: 1.6rem;

  background-color: var(--light-grey);
  border: none;
  border-radius: 10px;

  width: 70px;
  height: 40px;

  border: 2px solid red;
  :hover {
    transform: scale(0.98, 0.98);
    transition: ease-in-out 0.2s;
    background: red;
    color: var(--light-grey);
  }
`;
