import React from 'react';
import {Link} from "react-router-dom";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import {apiURL} from "../../config";

const useStyles = makeStyles({
  root: {
    marginBottom: '20px'
  },
  card: {
    width: '90%',
    margin: '0 auto'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  cardActions: {
    flexDirection: 'column',
    alignItems: "flex-start"
  },
  name: {
    marginBottom: '20px'
  }
});

const PhotoCard = ({title, image, id, name, onClick, userId, onClickOpenModal}) => {
  const classes = useStyles();

  let btnDelete = (
    <Button variant="contained" color="primary" onClick={onClick}>Delete</Button>
  );

  if (id !== userId) {
    btnDelete = null;
  }

  return (
    <>
      <Grid item xs={6} md={4} className={classes.root}>
        <Card className={classes.card}>
          <CardActionArea onClick={onClickOpenModal}>
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
          <CardActions className={classes.cardActions}>
            <Typography
              component={Link}
              to={'/users/' + id}
              color="inherit"
              className={classes.name}
            >{name}</Typography>
            <div>
              {btnDelete}
            </div>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default PhotoCard;
