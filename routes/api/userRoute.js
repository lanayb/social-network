const router = require('express').Router();
const {
    getUsers,
    oneUser,
    newUser

} = require('../../controllers/usersCon');
// const { route } = require('./thoughtRoute');

router.route('/').get(getUsers).post(newUser);

router.route('/:userId').get(oneUser);

module.exports = router;

