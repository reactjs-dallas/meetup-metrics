// External Dependencies
import React from 'react';
import {
  AppBar,
  Dialog,
  IconButton,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

// Local Dependencies
import december2017data from '../shared/december2017data';

// Local Functions
function Transition(props) {
  return <Slide direction="up" {...props} />;
}

// Local Variables
const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  table: {
    minWidth: 700,
  },
  a: {
    textDecoration: 'none',
  }
}));


// Component Definition
const AttendanceDialog = ({
  isOpen,
  onCloseDialog,
}) => {
  const classes = useStyles();

  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={onCloseDialog}
      transition={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton color="contrast" onClick={onCloseDialog} aria-label="Close">
            <CloseIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            December 2017 @ Tail Light
          </Typography>
        </Toolbar>
      </AppBar>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Twitter</TableCell>
            <TableCell>About</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {december2017data.map(dev => {
            return (
              <TableRow key={dev.name}>
                <TableCell>{dev.name}</TableCell>
                {
                  dev.twitter ?

                    <TableCell>
                      <a href={`https://twitter.com/${dev.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.a}
                      >
                        {`@${dev.twitter}`}
                      </a>
                    </TableCell> :

                    <TableCell>{`-`}</TableCell>
                }
                <TableCell>{dev.about}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Dialog>
  );
};

export default AttendanceDialog;
