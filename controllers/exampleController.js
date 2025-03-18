const example = require('../models/exampleModel');
const mongoose = require('mongoose');

// Showing Hello World at / route
const world = async (req, res) => {
    res.send("Hello World");
};

// GET method to get data 
const getUser = async (req, res) => {
    try {
        const users = await example.find();  
        res.json(users);
    } catch (error) {
        console.error(error);  // Log actual error
        res.status(500).json({ error: 'Failed to fetch data', details: error.message });
    }
};;

// DELETE method to delete a user
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        // Use mongoose.Types.ObjectId directly
        const user = await example.deleteOne({ _id: new mongoose.Types.ObjectId(id) });

        if (user.deletedCount === 0) {
            res.status(404).json({ error: "Given user not found" });
            return;
        }

        res.json({ message: "Given user deleted successfully" });

    } catch (error) {
        res.status(500).json({ error: "Error occurs", details: error.message });
    }
};

// POST method to add a new user
const addUser = async(req, res) => {
    try {
        const user = req.body;
        const newUser = await example.create(user);
        res.json({message: "User added successfully", newUser});
    } catch(error) {
        res.status(500).json({error: "Error occurs"});
    }
};

module.exports = {getUser, deleteUser , addUser, world};
