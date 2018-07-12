import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from 'pages/HomePage';
import ResumePage from 'pages/ResumePage';

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/resume' component={ResumePage} />
        </Switch>
      </main>
    );
  }
}

export default App;
