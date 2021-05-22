import React from 'react';
import {Helmet} from "react-helmet";
import Title from "../../components/Title/Title";

const AddNewPhoto = () => {
  return (
    <>
      <Helmet>
        <title>Form</title>
      </Helmet>
      <Title>Add new photo</Title>
    </>
  );
};

export default AddNewPhoto;