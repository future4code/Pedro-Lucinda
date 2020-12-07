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
