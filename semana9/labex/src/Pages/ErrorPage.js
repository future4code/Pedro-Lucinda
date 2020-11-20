import React from "react";
//Router
import { useHistory } from "react-router-dom";
//styles
import { H1, P } from "../components/styledComponents/Text";
import { SendBtn } from "../components/styledComponents/Buttons";
import "../styles/errorPage.css";

const ErrorPage = () => {
  const history = useHistory();

  function handleGoBackBtn() {
    history.push("/");
  }
  return (
    <div className="ErrorPage-Wrapper">
      <H1> Ops page not found :/ </H1>
      <P> Continue on web site by clicking on the button bellow </P>
      <SendBtn onClick={handleGoBackBtn}> Go back </SendBtn>
    </div>
  );
};

export default ErrorPage;
