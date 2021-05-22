import React from 'react';
import {Link} from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
  Grid
} from '@material-ui/core';
import {apiURL} from "../../config";

const useStyles = makeStyles({
  card: {
    width: '90%',
    margin: '0 auto'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
});

const PhotoCard = ({onClick, title, image, id, user}) => {
  const classes = useStyles();

  return (
    <Grid item xs={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea onClick={onClick}>
          <CardMedia
            className={classes.media}
            image={apiURL + '/' + image}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography component={Link} to={'/users/' + id} color="inherit">{user}</Typography>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default PhotoCard;
