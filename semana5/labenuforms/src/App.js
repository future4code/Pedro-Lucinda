import React from "react";

import { AppContainer, Button } from "./styled/styled";
import Etapa1 from "./pages/Etapa1";
import Etapa2 from "./pages/Etapa2";
import Etapa3 from "./pages/Etapa3";
import Final from "./pages/Final";

class App extends React.Component {
  state = {
    etapa: 1,
  };

  onClickChange = () => {
    return this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    const renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1 onClick={this.onClickChange} />;
        case 2:
          return <Etapa2 onClick={this.onClickChange} />;
        case 3:
          return <Etapa3 onClick={this.onClickChange} />;
        case 4:
          return <Final />;
        default:
          break;
      }
    };

    return (
      <AppContainer>
        <div className="container">{renderizaEtapa()}</div>
      </AppContainer>
    );
  }
}
export default App;
