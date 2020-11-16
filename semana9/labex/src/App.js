import react from "react";
//Route
import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";
//css
import "./styles/root.css";
import "./styles/app.css";
//pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Apply from "./Pages/Apply";
import NavBar from "./components/NavBar";
import TripDetail from "./Pages/TripDetail";
import CreateTrip from "./Pages/CreateTrip";

function App() {
  return (
    <div className="App">
      <Routes>
      <NavBar />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Login" exact={true} component={Login} />
          <Route path="/Register" exact={true} component={Register} />
          <Route path="/TripDetail" exact={true} component={TripDetail} />
          <Route path="/CreateTrip" exact={true} component={CreateTrip} />
          <Route path="/Apply" exact={true} component={Apply} />
        </Switch>
      </Routes>
    </div>
  );
}

export default App;
