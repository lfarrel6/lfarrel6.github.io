import React from 'react';
import './App.css';

import { 
  MaxHeightFluidContainer,
  MaxHeightRow,
  Sidenav,
  Controller 
} from './components';

import { Col } from 'react-bootstrap';
import { 
  BrowserRouter as Router
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <MaxHeightFluidContainer>
        <MaxHeightRow>
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
