const {Users} = require('../models/userschema')



const allUsers = async (req, res) => {
    try {
      const users = await Users.find();
      res.status(200).json(users);
      console.log("All users");
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  const getSingleUser = async (req, res) => {
    try {
      if (req.params.id) {
        const { id } = req.params;
        const user = await Users.findById(id);
        post ? res.status(200).json(user) : res.send("no user");
        console.log("single");
      } else res.json("no id found");
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  };
  const newUser = async (req, res) => {
    console.log(req.body);
    try {
      const { username, email, password } = req.body;
      const newuser = new Users({
        username,
        email,
        password,
      });
      await newuser.save();
      res.status(201).json(newuser);
      console.log("new user has been made");
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  };
  const updateUser = async (req, res) => {
    const { id: _id } = req.params;
    const User = req.body;
    try {
      const updatedUser = await Users.findByIdAndUpdate(_id, User, { new: true });
      res.status(200).json(updatedUser);
      console.log("updated User");
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  };
  const deleteUser = async (req, res) => {
    const { id: _id } = req.params;
    try {
      const deletedUser = await Users.findByIdAndRemove(_id);
      res.status(200).json(deletedUser);
      console.log("deleted User");
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  };
  module.exports = {
    allUsers,
    getSingleUser,
    deleteUser,
    newUser,
    updateUser,
  };
  