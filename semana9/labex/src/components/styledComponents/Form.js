import styled from "styled-components";

export const InputForm = styled.input`
  width: 450px;
  height: 50px;
  padding: 20px;
  margin-bottom: 20px;

  color: var(--dark-grey);
  font-size: 1.6rem;

  background-color: var(--input-color);
  outline: none;
  border: none;

  border-radius: 10px;

  :hover {
    transform: scale(0.995, 0.995);
    transition: ease-in-out 0.4s;
  }
`;

export const ShortInp = styled.input`
  width: 130px;
  height: 50px;
  padding: 0 20px;
  margin-bottom: 20px;

  color: var(--dark-grey);
  font-size: 1.6rem;

  background-color: var(--input-color);
  outline: none;
  border: none;

  border-radius: 10px;

  :hover {
    transform: scale(0.995, 0.995);
    transition: ease-in-out 0.4s;
  }
`;

export const Select = styled.select`
  width: 300px;
  height: 50px;
  padding: 0 20px;
  margin-bottom: 20px;

  color: var(--dark-grey);
  font-size: 1.6rem;

  background-color: var(--input-color);
  outline: none;
  border: none;

  border-radius: 10px;

  :hover {
    transform: scale(0.995, 0.995);
    transition: ease-in-out 0.4s;
  }
`;

export const Textarea = styled.textarea`
  width: 450px;
  height: 200px;
  padding: 20px;
  margin-bottom: 20px;

  font-family: "Roboto", sans-serif;
  color: var(--dark-grey);
  font-size: 1.6rem;

  background-color: var(--input-color);
  outline: none;
  border: none;

  border-radius: 10px;

  :hover {
    transform: scale(0.995, 0.995);
    transition: ease-in-out 0.4s;
  }
`;
