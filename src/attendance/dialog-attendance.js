// External Dependencies
import React from 'react';
import Dialog from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';
import Slide from 'material-ui/transitions/Slide';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
// import { withStyles } from 'material-ui/styles';


// Local Functions
function Transition(props) {
  return <Slide direction="up" {...props} />;
}


// Component Definition
const AttendanceDialog = (props) => {
  const {
    isOpen,
    onRequestCloseDialog,
  } = props;

  console.log('props', props);

  return (
    <Dialog
      fullScreen
      open={isOpen}
      onRequestClose={onRequestCloseDialog}
      transition={Transition}
    >
      hello Mike
    </Dialog>
  );
};

export default AttendanceDialog;
