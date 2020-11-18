//context
import TripsContextProvider from "./contex/TripsContext";
import TripPageContextProvider from "./contex/TripPageContext";
import ApplyIdContextProvider from "./contex/ApplyIdContext";
import UserContextProvider from "./contex/UserContext";
//css
import "./styles/root.css";
import "./styles/app.css";
//Route
import Routes from "./Routes/Routes";

function App() {
  return (
    <TripsContextProvider>
      <TripPageContextProvider>
        <ApplyIdContextProvider>
          <UserContextProvider>
            <div className="App">
              <Routes />
            </div>
          </UserContextProvider>
        </ApplyIdContextProvider>
      </TripPageContextProvider>
    </TripsContextProvider>
  );
}

export default App;
