import React from "react";
import RegisterPage from "./components/RegisterPage";
import UserListPage from "./components/UserListPage";
import "./Styles.css";

class App extends React.Component {
  state = {
    formPage: true,
  };

  changePage = () => {
    this.setState({ formPage: !this.state.formPage });
  };

  render() {
    const currentPage = this.state.formPage ? (
      <RegisterPage />
    ) : (
      <UserListPage />
    );

    const btnName = this.state.formPage ? "Users List" : "Go back";

    return (
      <div className="App">
        {currentPage}
        <button className="goBackBtn" onClick={this.changePage}>
          <strong>{btnName}</strong>
        </button>
      </div>
    );
  }
}

export default App;
