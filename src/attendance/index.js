// External Dependencies
import React, { Component } from 'react';
import {
  Avatar,
  Button,
  Chip,
} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/core/styles';

// Local Dependencies
import AttendanceDialog from './dialog-attendance';
import december2017data from '../shared/december2017data';

// Local Variables
const styles = theme => ({
  attendanceSection: {
    alignItems: 'center',
    border: '2px solid cornflowerblue',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 32,
    padding: 32,
    paddingTop: 0,
  },
  button: {
    marginTop: 24,
  },
  chip: {
    margin: 6,
    cursor: 'pointer',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 600,
  },
  svgIcon: {
    color: grey[800],
  },
});

// Component Definition
class Attendance extends Component {
  state = {
    isOpen: false,
  }

  handleClickOpenDialog = () => {
    this.setState({
      isOpen: true,
    });
  }

  handleCloseDialog = () => {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { classes } = this.props;
    const { isOpen } = this.state;

    return (
      <section className={classes.attendanceSection}>
        <h1>December 2017 @ Tail Light</h1>
        <div className={classes.row}>
          {december2017data.map(dev => (


            <a href={`https://twitter.com/${dev.twitter}`}
              target="_blank" rel="noopener noreferrer"
              key={dev.about} style={{ cursor: 'auto' }}>
              <Chip
                avatar={
                  <Avatar>
                    <FaceIcon className={classes.svgIcon} />
                  </Avatar>
                }
                className={classes.chip}
                key={dev.name}
                label={dev.name}
              />

            </a>
          ))}
        </div>
        <div className={classes.row}>
          <Button
            className={classes.button}
            color="primary"
            onClick={this.handleClickOpenDialog}
            raised
          >
            Open Meetup Details
          </Button>
        </div>
        <AttendanceDialog
          isOpen={isOpen}
          onCloseDialog={this.handleCloseDialog}
        />
      </section>
    )
  };
}

export default withStyles(styles)(Attendance);
