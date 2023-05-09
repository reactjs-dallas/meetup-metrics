// External Dependencies
import React, { Component } from 'react';

// Local Dependencies
import { getCurrentYear } from './utils/date'
import Attendance from './attendance';
import ErrorBoundary from './shared/error-boundary';
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
      <ErrorBoundary>
        <div className="app">
          <TopNav />
          <MembershipTrend />
          <Attendance />

          <section style={{ paddingBottom: 24 }}>
            <a
              href="https://www.meetup.com/ReactJSDallas/"
              rel="noreferrer noopener"
              target="_blank"
            >
              ReactJS Dallas User Group on meetup.com
            </a>
          </section>

          <footer className="app-footer">
            <div style={{ display: 'inline-flex' }}>
              <img src={logo} className="app-logo" alt="logo" />
              <p>A community project of <a href="https://www.text-em-all.com/careers" tabIndex={0}>Text-Em-All</a></p>
              <img src={logo} className="app-logo-2" alt="logo" />
            </div>
            <p>© {getCurrentYear()} ReactJS Dallas User Group. All Rights Reserved.</p>
          </footer>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
