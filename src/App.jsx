import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import ResumePage from 'pages/ResumePage';

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/resume" component={ResumePage} />
      <Route path="/aboutme" component={ResumePage} />
      <Route path="/contact" component={ResumePage} />
    </Switch>
  </main>
);

export default App;
