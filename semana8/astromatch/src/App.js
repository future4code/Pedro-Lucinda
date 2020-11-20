import React from "react";
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import Chat from "./pages/Chat";
import Home from "./pages/Home";
//css
import './styles/app.css';
import './styles/root.css';


export default function App() {
  return (
    <Routes>
      <div className="App">
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/chat' render={(props) => (
                <Chat {...props} />
              )} />
        </Switch>
      </div>
    </Routes>
  );
}
