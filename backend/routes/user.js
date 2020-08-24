const express = require('express');
const router = express.Router();

const { requireSignin } = require('../controllers/auth');

const { userById } = require('../controllers/user');

router.get('/secret/:userId', requireSignin, (req, res) => {
    res.json({ user: req.profile });
});

router.param('userId', userById);

module.exports = router;