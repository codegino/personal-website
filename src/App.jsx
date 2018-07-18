import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'personal_website/pages/HomePage';
import ResumePage from 'personal_website/pages/ResumePage';
import AboutWebsite from 'personal_website/pages/about/AboutWebsite';
import AboutMe from 'personal_website/pages/about/AboutMe';

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
