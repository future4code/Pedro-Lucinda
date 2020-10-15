import React from "react";
import "./App.css";
import ProfileIntro from "./components/ProfileIntro/ProfileIntro";
import Nav from "./components/Nav/Nav";
import Box from "./components/Box/Box";
import Info from "./components/Info/info";

function App() {
  return (
    <div className="App">
      <Nav />
      <ProfileIntro />
      <div>
        <Box title="Education">
          <Info
            img="https://picsum.photos/40/40"
            instName="Labedsadanu"
            description="Full Stack Web Development"
            year="2020.2 - 2021.1"
          />
        </Box>
      </div>

      <Box title="Licenses and certifications" />
    </div>
  );
}

export default App;
