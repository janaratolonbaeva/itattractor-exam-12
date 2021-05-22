import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet";
import {useParams} from "react-router-dom";
import {Backdrop, Button, CardMedia, Fade, Grid, makeStyles, Modal, Paper, Typography} from "@material-ui/core";
import Title from "../../components/Title/Title";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserPhotosRequest, getPhotoRequest, removePhotoRequest} from "../../store/actions/photosActions";
import ProgressBar from "../../components/UI/ProgressBar/ProgressBar";
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

const UserPhotos = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const photos = useSelector(state => state.photos.photos);
  const loading = useSelector(state => state.photos.photosLoading);
  const user = useSelector(state => state.users.user);
  const photo = useSelector(state => state.photos.photo);
  const [open, setOpen] = useState(false);
  const classes = useStyle();

  useEffect(() => {
    dispatch(fetchUserPhotosRequest(params.id));
  }, [dispatch, params.id]);

  const getPhoto = (id) => {
    dispatch(getPhotoRequest(id));
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const deletePhoto = (id) => {
    dispatch(removePhotoRequest(id));
  }

  return (
    <>
      <Helmet>
        <title>Photos</title>
      </Helmet>
      <Title>Photo Gallery</Title>
      <Grid container justify="space-between">
        {loading? (
          <ProgressBar/>
          ) : photos && photos.map(item => (
          <PhotoCard
            key={item._id}
            image={item.image}
            title={item.title}
            name={item.user.displayName}
            id={item.user._id}
            userId={user._id}
            getPhoto={() => getPhoto(item._id)}
            onClick={() => deletePhoto(item._id)}
          />
        ))}
      </Grid>
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

export default UserPhotos;