import React from 'react';
import {useDispatch} from "react-redux";
import {Avatar, Button, Grid, Link, makeStyles, Typography} from "@material-ui/core";
import {logoutRequest} from "../../../../store/actions/usersActions";
import {apiURL} from "../../../../config";

const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  userText: {
    marginRight: '10px'
  },
  avatarBlock: {
    marginRight: '20px'
  }
}));

const UserMenu = ({user}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <Grid container alignItems="center">
       <Grid item className={classes.avatarBlock}>
         <Grid container alignItems="center">
           <Link to="/addNew-photo" className={classes.userText}>{user.displayName}</Link>
           {user.avatar ?
             <Avatar
               src={apiURL + '/' + user.avatar}
               className={classes.avatar}
             />
             :
             <Avatar className={classes.avatar}/>
           }
         </Grid>
       </Grid>
        <Grid item>
          <Button color="default" variant="contained" onClick={() => dispatch(logoutRequest())}>Logout</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default UserMenu;