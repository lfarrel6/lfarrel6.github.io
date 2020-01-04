import React, { useState } from 'react';
import './App.css';
import { MaxHeightContainer, MaxHeightRow, Sidenav } from './components';
import { Col } from 'react-bootstrap';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <MaxHeightContainer>
        <MaxHeightRow>
          <Col md={4}>
            <Sidenav />
          </Col>
          <Col md={8}>
            <Switch>
              <Route path='/projects'>
                <h1>Projects</h1>
              </Route>
              <Route path='/work'>
                <h1>Work</h1>
              </Route>
              <Route path='/'>
                <h1>Homepage</h1>
              </Route>
            </Switch>
          </Col>
        </MaxHeightRow>
      </MaxHeightContainer>
    </Router>
  );
}

export default App;
