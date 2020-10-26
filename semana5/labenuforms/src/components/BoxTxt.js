import React from "react";
import { Box, H4, InputTxt } from "../styled/styled";

const BoxTxt = (props) => {
  return (
    <Box>
      <H4>{props.titulo}</H4>
      <InputTxt type="text" />
    </Box>
  );
};

export default BoxTxt;
