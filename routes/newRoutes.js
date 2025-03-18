const express = require('express');
const router = express.Router();

const { addeUser, getUser, delUser } = require('../controllers/userController');

router.post('/user' , addeUser);
router.get('/user', getUser );
router.delete('/user/:id', delUser);

module.exports = router;
