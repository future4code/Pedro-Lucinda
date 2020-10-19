import React from "react";
import BoxTxt from "../components/BoxTxt";
import BoxSelect from "../components/BoxSelect";
import { H1, Container, Button } from "../styled/styled";

const Etapa3 = (props) => {
  return (
    <Container>
      <H1> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </H1>
      <BoxTxt titulo="5. Por que você não terminou um curso de graduação?" />
      <BoxSelect
        titulo="6. Você fez algum curso complementar?"
        value1="Nenhum"
        text1="Nenhum"
        value2="Curso Tecnico"
        text2="Curso Tecnico"
        value3="Curso de Ingles"
        text3="Curso de Ingles"
      />
      <Button onClick={props.onClick}>Próxima etapa</Button>
    </Container>
  );
};

export default Etapa3;
