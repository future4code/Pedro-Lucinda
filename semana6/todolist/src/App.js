import React from "react";
import {
  TarefaList,
  Tarefa,
  InputsContainer,
  TodoContainer,
  TodoDiv,
  AppContainer,
  Input,
  Select,
  InputsContainerSelect,
} from "./styles/styled";

import "./styles/styles.css";

import Header from "./components/Header";
import delIcon from "./imgs/delete-checked.svg";
import checkGrey from "./imgs/check-circle-grey.svg";

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: "",
    filtro: "",
    clear: false,
  };

  componentDidMount = () => {
    if (localStorage.getItem("tarefas")) {
      this.setState({ tarefas: JSON.parse(localStorage.getItem("tarefas")) });
    }
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    const newTodo = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
      srcCheck: checkGrey,
    };
    const newList = [newTodo, ...this.state.tarefas];
    this.setState({ tarefas: newList, inputValue: "" });

    const render = this.state.tarefas.map((todo) => {
      return (
        <TodoDiv>
          <img src={todo.srcCheck} />
          <p>{todo.texto} </p>
          <img src={delIcon} />
        </TodoDiv>
      );
    });

    localStorage.setItem("tarefas", JSON.stringify(newList));
  };

  selectTarefa = (id) => {
    const novaLista = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novaTarefa = { ...tarefa, completa: !tarefa.completa };
        return novaTarefa;
      } else {
        return tarefa;
      }
    });

    this.setState({ tarefas: novaLista });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <AppContainer className="app">
        <TodoContainer>
          <h1> To Do!</h1>
          <InputsContainer>
            <Input
              value={this.state.inputValue}
              onChange={this.onChangeInput}
            />
            <button onClick={this.criaTarefa}>Adicionar</button>
          </InputsContainer>
          <br />

          <InputsContainerSelect>
            <label>Filtro</label>
            <Select value={this.state.filter} onChange={this.onChangeFilter}>
              <option value="">Nenhum</option>
              <option value="pendentes">Pendentes</option>
              <option value="completas">Completas</option>
            </Select>
            <button className="clearBtn">Limpar</button>
          </InputsContainerSelect>

          <TarefaList>
            {listaFiltrada.map((tarefa) => {
              return (
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
              );
            })}
          </TarefaList>
        </TodoContainer>
      </AppContainer>
    );
  }
}

export default App;
