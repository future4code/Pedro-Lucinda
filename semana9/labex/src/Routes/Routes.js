//Route
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//pages
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Apply from "../Pages/Apply";
import Candidates from "../Pages/Candidates";
import TripDetail from "../Pages/TripDetail";
import CreateTrip from "../Pages/CreateTrip";
import ErrorPage from "../Pages/ErrorPage";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Register" exact component={Register} />
        <Route path="/TripDetail" exact component={TripDetail} />
        <Route path="/CreateTrip/:id" exact component={CreateTrip} />
        <Route path="/Apply/" exact component={Apply} />
        <Route path="/Candidates/:id" exact component={Candidates} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
