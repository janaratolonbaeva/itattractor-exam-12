import React from 'react';
import {Helmet} from "react-helmet";
import {Grid} from "@material-ui/core";
import Title from "../../components/Title/Title";
import PhotoCard from "../../components/PhotoCard/PhotoCard";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Title>Photo Gallery</Title>
      <Grid container justify="space-between">
        <PhotoCard/>
      </Grid>
    </>
  );
};

export default Home;