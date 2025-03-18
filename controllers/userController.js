const User = require('../models/newModel');


const addeUser = async (req, res) => {
    try {
        const {name, email} = req.body;
        const existUser = await User.findOne({email})
        if(existUser){
          return res.status(400).json({error:"Email already exist"});
        }
        
        const newUser = await User.create({name, email});
        res.json({message:"User added Successfully", newUser});
     }
     catch(error) {
        res.status(500).json ({error:error.message ||"Error occured"});

        
     }
   };
   



const getUser = async (req,res) => {
   try {
      const data =await User.find();
      res.json(data);
   }
   catch(error) {
      res.status(500).json({error:error.message});
   }
}


const delUser = async (req, res)=> {
   try {
      

      const user = await User.deleteOne({_id: req.params.id});
      if(user.deletedCount ==0){
         res.status(404).json({error: "User not found"})
      }
      res.json({message:"User deleted successfully"});
      }
      catch {
         res.status(500).json({error: error.message});
      }
}


module.exports = {addeUser,getUser, delUser};