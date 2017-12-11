// External Dependencies
import React from 'react';
import Trend from 'react-trend';


// Local Dependencies
import MEMBERSHIP_DATA from '../shared/membership-data';

// Local Variables
const membershipRawNumbers = MEMBERSHIP_DATA.map(meetup => meetup.y);

const trendRootStyles = {
  border: '2px solid #222',
  borderRadius: '4px',
  margin: 32,
  backgroundColor: '#eee',
};

// Component Definition
const MembershipTrend = () => {
  return (
    <div style={trendRootStyles}>
      <h1>Membership Trend</h1>
      <Trend
        autoDraw
        autoDrawDuration={3000}
        autoDrawEasing="ease-out"
        data={membershipRawNumbers}
        radius={20}
        strokeWidth={2}
        gradient={['darkslateblue', 'purple', 'violet']}
      />
    </div>
  );
};

export default MembershipTrend;
