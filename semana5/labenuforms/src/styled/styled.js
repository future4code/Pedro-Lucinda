import styled from "styled-components";

export const Box = styled.div`
  width: clamp(30vw, 700px, 70vw);
  height: clamp(12vh, 14vh, 18vh);

  padding: 22px;
  margin-bottom: 20px;

  background-color: #f5efdf;

  box-shadow: 1px 1px 2px grey;
  border-radius: 10px;

  :hover {
    transform: scale(1.015, 1.015);
    transition: ease-in-out 0.3s;
  }
`;

export const AppContainer = styled.div`
  margin-top: 50px;
  padding: 0;
  box-sizing: border-box;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f9b24e;

  font-family: "Roboto", sans-serif;
  color: #455159;
`;

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const H1 = styled.h1`
  font-weight: 500;
  font-size: 25px;

  margin-bottom: 30px;
`;

export const H4 = styled.h4`
  font-weight: 500;
  font-size: 16px;

  background-color: #f5efdf;
`;

export const InputTxt = styled.input`
  box-shadow: none;
  outline: none;
  border: none;

  border-bottom: 1px dotted #45525b;

  width: 80%;
  margin-top: 40px;
  margin-bottom: 10px;

  background-color: #f5efdf;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;

  background-color: #f27405;

  color: #f5efdf;
  font-size: 18px;
  font-weight: 600;
  text-align: center;

  box-shadow: 1px 1px 2px grey;
  border-radius: 10px;

  border: none;
  outline: none;

  :hover {
    background-color: #f5efdf;
    color: #f27405;

    transition: ease-in-out 0.3s;
  }
`;

export const Select = styled.select`
  box-shadow: none;
  outline: none;
  border: none;

  box-shadow: 1px 1px 3px grey;
  border-radius: 10px;

  height: 30px;
  width: 250px;
  margin-top: 20px;
  padding-left: 10px;

  background-color: #f5efdf;

  font-size: 16px;
  color: #455159;
`;
