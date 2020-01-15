import React from "react";
import "./App.css";

import {
  MaxHeightFluidContainer,
  MaxHeightRow,
  Background,
  NeuSmiley
} from "./components";

import { BrowserRouter as Router } from "react-router-dom";

const NeuBackground = () => {
  return (
    <Background>
      <NeuSmiley height="300px" width="300px" />
    </Background>
  );
};

function App() {
  return (
    <Router>
      <MaxHeightFluidContainer>
        <MaxHeightRow>
          <NeuBackground />
        </MaxHeightRow>
      </MaxHeightFluidContainer>
    </Router>
  );
}

export default App;
