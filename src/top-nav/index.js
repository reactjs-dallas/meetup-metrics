import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// Local Variables
const styles = {
  root: {
    width: '100%',
  },
};

// Component Definition
const TopNav = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography type="title" color="inherit">
            ReactJS Dallas - Meetup Metrics
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(TopNav);
