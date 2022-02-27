const res = require('express/lib/response');
const User = require('../models/User');

module.exports = {
    getUsers() {
        User.findAll()
        .then((users) => res.json(users))
        .cacthc((error) => res.status(400).json(error));

    },

    oneUser(req, res) {
        User.findOne()
        .then((user) => res.json(user))
        .catch((error) => res.status(400).json(error));
    },

    newUser(req, res) {
        User.create(req.body)
        .then((userData) => res.json(userData))
        .catch((error) => res.json(error));
    }
};
