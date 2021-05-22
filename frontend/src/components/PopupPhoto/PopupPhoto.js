import React from 'react';
import {Backdrop, Button, CardMedia, Fade, makeStyles, Modal, Paper, Typography} from "@material-ui/core";
import {apiURL} from "../../config";

const useStyle = makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    height: '80%',
    width: '80%',
    textAlign: 'center'
  },
  imageModal: {
    width: '100%',
    height: '80%'
  },
  titleModal: {
    margin: '20px 0'
  }
});

const PopupPhoto = ({photo, handleClose, open}) => {
  const classes = useStyle();

  return (
    <>
      {photo && (<Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        className={classes.modal}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Paper className={classes.paper}>
            <CardMedia
              image={apiURL + '/' + photo.image}
              title={photo.title}
              className={classes.imageModal}
            />
            <Typography className={classes.titleModal}>{photo.title}</Typography>
            <Button variant="contained" color="primary" onClick={handleClose}>Close</Button>
          </Paper>
        </Fade>
      </Modal>)}
    </>
  );
};

export default PopupPhoto;