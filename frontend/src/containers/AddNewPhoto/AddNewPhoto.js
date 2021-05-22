import React, {useState} from 'react';
import {Helmet} from "react-helmet";
import Title from "../../components/Title/Title";
import {Grid, Typography, makeStyles, Button} from "@material-ui/core";
import FormElement from "../../components/UI/Form/FormElement";
import FileInput from "../../components/UI/Form/FileInput";
import {useDispatch, useSelector} from "react-redux";
import {postPhotoRequest} from "../../store/actions/photosActions";

const useStyle = makeStyles({
  row: {
    marginBottom: '20px'
  }
});

const AddNewPhoto = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const error = useSelector(state => state.photos.postphotoError);
  const [photo, setPhoto] = useState({
    title: '',
    image: ''
  });

  const changeInputHandler = e => {
    const {name, value} = e.target;

    setPhoto(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const fileChangeHandler = e => {
    const name = e.target.name;
    const file = e.target.files[0];

    setPhoto(prevState => ({
      ...prevState,
      [name]: file
    }));
  };

  const submitForm = e => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(photo).forEach(key => {
      formData.append(key, photo[key]);
    });

    dispatch(postPhotoRequest(formData));
  };

  const getFieldError = fieldName => {
    try {
      return error.errors[fieldName].message;
    } catch (e) {
      return undefined;
    }
  };

  return (
    <>
      <Helmet>
        <title>Form</title>
      </Helmet>
      <Title>Add new photo</Title>
      <Grid container component="form" onSubmit={submitForm} direction="column">
        <Grid item xs className={classes.row}>
          <Grid container>
            <Grid item xs={3}>
              <Typography variant="h6">Title: </Typography>
            </Grid>
            <Grid item xs={9}>
              <FormElement
                type="text"
                name="title"
                value={photo.title}
                onChange={changeInputHandler}
                error={getFieldError('title')}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs className={classes.row}>
          <Grid container>
            <Grid item xs={3}>
              <Typography variant="h6">Image: </Typography>
            </Grid>
            <Grid item xs={9}>
              <FileInput
                name="image"
                label="Image"
                onChange={fileChangeHandler}
                error={getFieldError('image')}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container>
            <Grid item xs={3}/>
            <Grid item xs={9}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Create photo
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AddNewPhoto;