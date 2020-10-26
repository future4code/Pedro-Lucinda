import styled from "styled-components";

export const ImgMorning = styled.div`
  background-image: url("https://images.unsplash.com/photo-1569772605155-be00a04adf95?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  width: 600px;
  height: 200px;

  border-radius: 20px;
`;

export const ImgAfternoon = styled.div`
  background-image: url("https://images.unsplash.com/photo-1559923219-80b9dc1481ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  width: 600px;
  height: 200px;

  border-radius: 20px;
`;

export const ImgNight = styled.div`
  background-image: url("https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  width: 600px;
  height: 200px;

  border-radius: 20px;
`;

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid #d3e2e5;
  box-sizing: border-box;
  border-radius: 20px;

  width: 600px;
  height: auto;
  padding-top: 30px;

  background-color: white;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 50px auto;
  background-color: white;
`;

export const TarefaList = styled.ul`
  padding: 10px;
  width: 90%;

  display: flex;
  flex-direction: column;
  align-items: left;

  list-style: none;
  background-color: white;
`;

export const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};

  width: 100%;
  height: 40px;
  background-color: white;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 10px;

  width: 93%;

  background-color: white;
`;
export const InputsContainerSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-weight: bold;

  width: 93%;

  padding: 0 10px;

  background-color: white;
`;

export const TodoDiv = styled.div`
  width: 100%;
  height: 200px;

  background-color: white;
`;

export const Input = styled.input`
  width: 80%;
  height: 50px;
  background: #f5f8fa;

  border: 1px solid #d3e2e5;
  box-sizing: border-box;
  border-radius: 20px;

  font-size: 18px;

  margin-right: 5px;
  padding: 20px;

  outline: none;
`;
export const Select = styled.select`
  flex-grow: 1;
  height: 40px;
  margin: 0 10px;

  background: #f5f8fa;

  border: 1px solid #d3e2e5;
  box-sizing: border-box;
  border-radius: 20px;

  padding: 5px;
  font-weight: 500;
  color: #4d6f80;

  outline: none;
`;
