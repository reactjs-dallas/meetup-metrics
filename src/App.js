// External Dependencies
import React, { Component } from 'react';

// Local Dependencies
import Attendance from './attendance';
import MembershipTrend from './trend';
import TopNav from './top-nav';

import logo from './logo.svg';
import './App.css';

// TODO: Add prop-types in all places where needed

// TODO: Give the TopNav some more styling

// TODO: Add router to display info for different meetups

// TODO: Replace app-logo with another svg, preferably something specific to Dallas

// Component Definition
class App extends Component {
  render() {
    return (
      <div className="app">
        <TopNav />
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">ReactJS Dallas - Meetup Metrics</h1>
        </header>

        <MembershipTrend />
        <Attendance />

        <iframe title="meetup-details" width="250" height="600" src="http://meetu.ps/3fFbyY" frameBorder="0"></iframe>
      </div>
    );
  }
}

export default App;
