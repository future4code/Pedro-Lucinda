//Route
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//pages
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Apply from "../Pages/Apply";
import NavBar from "../components/NavBar";
import TripDetail from "../Pages/TripDetail";
import CreateTrip from "../Pages/CreateTrip";
import ErrorPage from "../Pages/ErrorPage";

function Routes() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/home/:id" exact component={Home} />
        <Route path="/" exact component={Login} />
        <Route path="/Register" exact component={Register} />
        <Route path="/TripDetail" exact component={TripDetail} />
        <Route path="/CreateTrip" exact component={CreateTrip} />
        <Route path="/Apply" exact component={Apply} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
