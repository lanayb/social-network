const router = require('express').Router();
const { 
    getThought, 
    oneThought, 
    newThought, 
    updateThought, 
    deleteThought
} = require('../../controllers/thoughtsCon');


router.route('/').get(getThought).post(newThought);

router
.route('/:thoughtId')
.get(oneThought)
.put(updateThought)
.delete(deleteThought);


module.exports = router;
