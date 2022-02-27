const router = require('express').Router();
const {
    getUsers,
    oneUser,
    newUser

} = require('../../controllers/usersCon');

// api/users
router.route('/').get(getUsers).post(newUser);

// api/users/:userId
router.route('/:userId').get(oneUser);

module.exports = router;

