// External Dependencies
import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Chip from 'material-ui/Chip';
import FaceIcon from 'material-ui-icons/Face';
import grey from 'material-ui/colors/grey';
import { withStyles } from 'material-ui/styles';


// Local Dependencies
import AttendanceDialog from './dialog-attendance';
import december2017data from '../shared/december2017data';


// Local Variables
const styles = theme => ({
  attendanceSection: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    border: '2px solid cornflowerblue',
    borderRadius: '4px',
    margin: 32,
    paddingTop: 0,
    padding: 32,
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'center',
  },
  chip: {
    margin: 6,
  },
  svgIcon: {
    color: grey[800],
  },
  row: {
    width: 400,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
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

  handleRequestCloseDialog = () => {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { classes } = this.props;
    const { isOpen } = this.state;

    return (
      <section className={classes.attendanceSection}>
        <div className={classes.row}>
          <h1>December 2017 @ Tail Light</h1>
          {december2017data.map(dev => {
            console.log('dev', dev);
            return (
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
            );
          })}
        </div>
        <div className={classes.buttonRow}>
          <Button raised onClick={this.handleClickOpen}>Open Meetup Details</Button>
        </div>
        <AttendanceDialog
          isOpen={isOpen}
          onRequestCloseDialog={this.handleRequestCloseDialog}
        />
      </section>
    )
  };
}

export default withStyles(styles)(Attendance);
