const example = require('../models/exampleModel');

// Writing Functions

// GET method to get data 
 
const getUser = async (req, res) => {
    try {
            const user = await example.find();
            res.json(user);    
    } catch(error) {
        res.status(500).json({error: 'Failed to fetch data' });

    }
};

const deleteUser = async (req, res) => {
    
    try {
         const name = req.params.name;
        const user = await example.deleteOne({name});

        if(user.deletedCount===0){
          res.status(404).json({error:"Given user not found"});
        }
        res.json({message: "Given user deleted successfully"});

        
    } catch(error) {
        res.status(500).json({error: "Error occurs"});
    }
}

const addUser = async(req, res) => {
    try {
        const user = req.body;
        const newUser = await example.create(user);
        res.json({message: "User added successfully", newUser});


    } catch(error) {

          res.status(500).json({error: "Error occurs"});
    }
}

module.exports = {getUser, deleteUser , addUser};








