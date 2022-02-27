const res = require('express/lib/response');
const Thought = require('../models/Thought');

module.exports = {
    getThought() {
        Thought.findAll()
        .then((thoughts) => res.json(thoughts))
        .cacthc((error) => res.status(400).json(error));

    },

    oneThought(req, res) {
        
        Thought.findOne()
        .then((thought) => res.json(thought))
        .catch((error) => res.status(400).json(error));
    },

    newThought(req, res) {
        Thought.create(req.body)
        .then((ThoughtData) => res.json(ThoughtData))
        .catch((error) => res.json(error));
    },

    updateThought(req, res) {
        Thought.updateOne()
        .then((update) => res.json(update))
        .catch((error) => res.json(error));
    },

    deleteThought(req, res) {
        Thought.remove()
        .then((deleteThought) => res.status(deleteThought))
        .catch((error) => res.status(error));
        
    }
};


