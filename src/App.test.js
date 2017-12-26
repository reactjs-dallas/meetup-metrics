// External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from "enzyme";

// Internal Dependencies
import App from './App';

// Local Variables
const app = shallow(<App />);

// Begin Tests
describe('App', () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });
});
