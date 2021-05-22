const express = require('express');
const Photo = require('../models/Photo');
const upload = require('../multer').photos;
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const photos = await Photo.find();

    res.send(photos);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.post('/', auth, upload('image'), async (req, res) => {
  try {
    const photoData = {
      title: req.body.title,
      image: req.file.filename,
      user: req.user._id
    }

    const photo = new Photo(photoData);
    await photo.save();

    res.send(photo);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const photo = await Photo.findOne({_id: req.params.id});

    if (photo) {
      res.send(photo);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get('/users/:id', async (req, res) => {
  try {
    let criteria = {};

    if (req.params.id) {
      criteria = {user: req.params.id};
    }

    const photos = await Photo.find(criteria);
    res.send(photos);
  } catch (e) {
    res.sendStatus(500);
  }
});