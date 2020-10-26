import React from "react";
import { H4, Box, Select } from "../styled/styled";

const BoxSelect = (props) => {
  return (
    <Box>
      <H4> {props.titulo} </H4>
      <Select>
        <option value={props.value1}>{props.text1}</option>
        <option value={props.value2}>{props.text2}</option>
        <option value={props.value3}>{props.text3}</option>
        <option value={props.value4}>{props.text4}</option>
      </Select>
    </Box>
  );
};

export default BoxSelect;
