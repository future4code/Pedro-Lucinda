import React from "react";
import BoxTxt from "../components/BoxTxt";
import { H1, Container, Button } from "../styled/styled";

const Etapa2 = (props) => {
  return (
    <Container>
      <H1> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR </H1>
      <BoxTxt titulo="5. Qual curso?" />
      <BoxTxt titulo="6. Qual a unidade de ensino?" />
      <Button onClick={props.onClick}>Próxima etapa</Button>
    </Container>
  );
};

export default Etapa2;
