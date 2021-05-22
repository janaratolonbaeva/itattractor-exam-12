import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet";
import {useParams} from "react-router-dom";
import {Grid} from "@material-ui/core";
import Title from "../../components/Title/Title";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserPhotosRequest, getPhotoRequest, removePhotoRequest} from "../../store/actions/photosActions";
import ProgressBar from "../../components/UI/ProgressBar/ProgressBar";
import PopupPhoto from "../../components/PopupPhoto/PopupPhoto";

const UserPhotos = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const photos = useSelector(state => state.photos.photos);
  const loading = useSelector(state => state.photos.photosLoading);
  const user = useSelector(state => state.users.user);
  const photo = useSelector(state => state.photos.photo);
  const [open, setOpen] = useState(false);

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
            onClickOpenModal={() => getPhoto(item._id)}
            onClick={() => deletePhoto(item._id)}
          />
        ))}
      </Grid>
      <PopupPhoto
        handleClose={handleClose}
        open={open}
        photo={photo}
      />
    </>
  );
};

export default UserPhotos;