import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import ResumePage from 'pages/ResumePage';
import AboutWebsite from 'pages/about/AboutWebsite';
import AboutMe from 'pages/about/AboutMe';

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/resume" component={ResumePage} />
      <Route path="/about-website" component={AboutWebsite} />
      <Route path="/about-me" component={AboutMe} />
    </Switch>
  </main>
);

export default App;
