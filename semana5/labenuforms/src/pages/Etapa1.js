import React from "react";
import BoxTxt from "../components/BoxTxt";
import BoxSelect from "../components/BoxSelect";
import { H1, Container, Button } from "../styled/styled";

const Etapa1 = (props) => {
  return (
    <Container>
      <H1> ETAPA 1 - DADOS GERAIS </H1>
      <BoxTxt titulo="1. Qual o seu nome?" />
      <BoxTxt titulo="2. Qual sua idade?" />
      <BoxTxt titulo="3. Qual seu email?" />
      <BoxSelect
        titulo="4. Qual a sua escolaridade?"
        value1="Ensino Medio Incompleto"
        text1="Ensino Medio Incompleto"
        value2="Ensino Medio Completo"
        text2="Ensino Medio Completo"
        value3="Ensino Superior Incompleto"
        text3="Ensino Superior Incompleto"
        value4="Ensino Superior Completo"
        text4="Ensino Superior Completo"
      />
      <Button onClick={props.onClick}>Próxima etapa</Button>
    </Container>
  );
};

export default Etapa1;
