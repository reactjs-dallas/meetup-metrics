// External Dependencies
import React from 'react';
import AppBar from 'material-ui/AppBar';
import CloseIcon from 'material-ui-icons/Close';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Slide from 'material-ui/transitions/Slide';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

// Local Dependencies
import december2017data from '../shared/december2017data';

// Local Functions
function Transition(props) {
  return <Slide direction="up" {...props} />;
}

// Local Variables
const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  table: {
    minWidth: 700,
  },
});


// Component Definition
const AttendanceDialog = (props) => {
  const {
    classes,
    isOpen,
    onRequestCloseDialog,
  } = props;


  return (
    <Dialog
      fullScreen
      open={isOpen}
      onRequestClose={onRequestCloseDialog}
      transition={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton color="contrast" onClick={onRequestCloseDialog} aria-label="Close">
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
                <TableCell>{dev.twitter ? `@${dev.twitter}` : '—'}</TableCell>
                <TableCell>{dev.about}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Dialog>
  );
};

export default withStyles(styles)(AttendanceDialog);
