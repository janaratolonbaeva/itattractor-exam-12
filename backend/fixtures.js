const mongoose = require('mongoose');
const config = require('./config');
const User = require("./models/User");
const {nanoid} = require('nanoid');

const run = async () => {
  await mongoose.connect(config.db.url, config.db.options);

  const collections = await mongoose.connection.db.listCollections().toArray();

  for (const coll of collections) { // [{name: 'users'}, {name: 'products'}]
    await mongoose.connection.db.dropCollection(coll.name);
  }

  await User.create({
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

  await mongoose.connection.close();
};

run().catch(console.error);