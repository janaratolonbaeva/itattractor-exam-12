import React from 'react';
import PropTypes from 'prop-types';
import {Grid, MenuItem, TextField} from "@material-ui/core";

const FormElement = ({error, select, options, ...props}) => {
  let inputChildren = null;

  if (select) {
    inputChildren = options.map(option => (
      <MenuItem key={option._id} value={option._id}>
        {option.title}
      </MenuItem>
    ));
  }

  return (
    <Grid item xs>
      <TextField
        select={select}
        error={Boolean(error)}
        helperText={error}
        {...props}
      >
        {inputChildren}
      </TextField>
    </Grid>
  );
};

FormElement.propTypes = {
  ...TextField.propTypes,
  error: PropTypes.string,
  select: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default FormElement;