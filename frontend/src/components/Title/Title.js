import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    margin: '20px 0 30px'
  }
});

const Title = ({children}) => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Typography variant="h2">{children}</Typography>
    </div>
  );
};

export default Title;