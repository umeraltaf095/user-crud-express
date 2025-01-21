const express = require('express')

const {getUser, deleteUser, addUser, world} = require('../controllers/exampleController');


const router = express.Router(); 
// home route
router.get('/', world);

// to get a list of users

router.get('/user', getUser);

// to delete a user by their name 
router.delete('/user/:id', deleteUser);

// To add user 
router.post('/user', addUser);


module.exports = router;