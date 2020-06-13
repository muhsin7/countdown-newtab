import React from 'react';
// import Modal from '@material-ui/core/Modal';
import Pickers from '../Pickers/Pickers.js';
import { makeStyles } from '@material-ui/core/styles';
import './ModalOpen.css'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



export default function ModalOpen(){
  // const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  //
  // const handleClose = () => {
  //   setOpen(false);
  // };

  return(
    <React.Fragment>
    {/* <div class="fixed-action-btn">
      <a class="waves-effect waves-light btn-floating btn-large modal-trigger" href="#newCounter">  <i class="material-icons">add</i></a>
    </div> */}

    <div class="fixed-action-btn">
        <a class="btn-floating btn-large">
          <i class="large material-icons">mode_edit</i>
        </a>
        <ul>
          <li><a class="btn-floating red"><i class="material-icons">delete</i></a></li>
          <li><a class="btn-floating green modal-trigger" href="#newCounter"><i class="material-icons">add</i></a></li>
        </ul>
      </div>
      <div id="newCounter" class="modal">
        <Pickers/>
      </div>
    </ React.Fragment>
  );
}
