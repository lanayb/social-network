const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { email, thoughts, username} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await User.deleteMany({});
    await Thought.deleteMany({});


    const users = [];
    const thoughts = [];

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    process.exit(0);
});