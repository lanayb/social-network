const router = require('express').Router();
const { 
    getThought, 
    oneThought, 
    newThought, 
    updateThought, 
    deleteThought
} = require('../../controllers/thoughtsCon');

// api/thoughts/userThoughts
router.route('/').get(getThought).post(newThought);


// api/thoughts/:thoughtId
router
.route('/:thoughtId')
.get(oneThought)
.put(updateThought)
.delete(deleteThought);


module.exports = router;
