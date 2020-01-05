import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home'; 
import Projects from '../projects';
import Work from '../work';

function Controller(){
  return (
    <Switch>
      <Route path='/projects'>
        <Projects />
      </Route>
      <Route path='/work'>
        <Work />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  )
}

export default Controller;