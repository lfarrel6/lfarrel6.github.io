import React from 'react';
import './App.css';

import { 
  MaxHeightFluidContainer,
  MaxHeightRow,
  Sidenav,
  Controller,
  Neumorphic,
  Background,
  NeuSmiley
} from './components';

import { Col } from 'react-bootstrap';
import { 
  BrowserRouter as Router
} from 'react-router-dom';

const NeuBackground = () => {
  return (
    <Background>
      <NeuSmiley height='300px' width='300px' />
    </Background>
  );
}

function App() {


  return (
    <Router>
      <MaxHeightFluidContainer>
        <MaxHeightRow>
          <NeuBackground />
          <Col md={4}>
            <Sidenav />
          </Col>
          <Col md={8}>
            <Controller />
          </Col>
        </MaxHeightRow>
      </MaxHeightFluidContainer>
    </Router>
  );
}

export default App;
