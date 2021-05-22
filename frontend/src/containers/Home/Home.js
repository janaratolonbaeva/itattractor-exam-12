import React from 'react';
import {Helmet} from "react-helmet";
import {Grid, Typography} from "@material-ui/core";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Typography variant="h2">Photo Gallery</Typography>
      <Grid container justify="space-between">

      </Grid>
    </>
  );
};

export default Home;