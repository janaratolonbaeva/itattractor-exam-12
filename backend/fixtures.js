const mongoose = require('mongoose');
const {nanoid} = require('nanoid');
const config = require('./config');
const User = require("./models/User");
const Photo = require("./models/Photo");

const run = async () => {
  await mongoose.connect(config.db.url, config.db.options);

  const collections = await mongoose.connection.db.listCollections().toArray();

  for (const coll of collections) { // [{name: 'users'}, {name: 'products'}]
    await mongoose.connection.db.dropCollection(coll.name);
  }

  const [user1, user2] = await User.create({
    email: 'user1@photo',
    password: '123',
    token: nanoid(),
    displayName: 'User1'
  }, {
    email: 'user2@photo',
    password: '123',
    token: nanoid(),
    displayName: 'User2'
  });

  await Photo.create({
    user: user1,
    title: 'Way out of the forest',
    image: 'fixtures/image1.jpeg'
  },{
    user: user2,
    title: 'Lake among the mountains',
    image: 'fixtures/image2.jpeg'
  });

  await mongoose.connection.close();
};

run().catch(console.error);