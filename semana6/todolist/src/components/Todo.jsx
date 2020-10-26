import React from "react";
import { TodoDiv } from "../styles/styled";

const Todo = (props) => {
  return (
    <TodoDiv>
      <img src={props.srcCheck} />
      <p>{props.texto} </p>
      <img src={props.srcDel} />
    </TodoDiv>
  );
};

export default Todo;
