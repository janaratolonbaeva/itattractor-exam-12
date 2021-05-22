import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import {Grid} from "@material-ui/core";
import Title from "../../components/Title/Title";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchPhotosRequest} from "../../store/actions/photosActions";

const Home = () => {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.photos.photos);

  useEffect(() => {
    dispatch(fetchPhotosRequest());
  }, [dispatch]);

  console.log(photos);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Title>Photo Gallery</Title>
      <Grid container justify="space-between">
        {photos && photos.map(item => (
          <PhotoCard
            key={item._id}
            image={item.image}
            title={item.title}
            user={item.user.displayName}
            id={item.user._id}
          />
        ))}
      </Grid>
    </>
  );
};

export default Home;