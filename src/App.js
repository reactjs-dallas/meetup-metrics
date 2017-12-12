// External Dependencies
import React, { Component } from 'react';

// Local Dependencies
import Attendance from './attendance';
import MembershipTrend from './trend';
import TopNav from './top-nav';
import logo from './logo.svg';
import './App.css';

// TODO: Add prop-types in all places where needed

// TODO: Add router to display info for different meetups

// Component Definition
class App extends Component {
  render() {
    return (
      <div className="app">
        <TopNav />
        <MembershipTrend />
        <Attendance />

        <iframe title="meetup-details" width="250" height="485" src="http://meetu.ps/3fFbyY" frameBorder="0"></iframe>

        <footer className="app-footer">
          <img src={logo} className="app-logo" alt="logo" />
          <p>A community project of <a href="https://www.call-em-all.com/careers" tabIndex={0}>Call-Em-All</a></p>
          <img src={logo} className="app-logo-2" alt="logo" />
        </footer>
      </div>
    );
  }
}

export default App;
