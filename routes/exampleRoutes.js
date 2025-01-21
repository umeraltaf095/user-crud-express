const express = require('express')

const {getUser, deleteUser, addUser} = require('../controllers/exampleController');


const router = express.Router(); 

// to get a list of users
router.get('/user', getUser);

// to delete a user by their name 
router.delete('/user/:name', deleteUser);

// To add user 
router.post('/user', addUser);


module.exports = router;