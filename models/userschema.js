 const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    username: String,
    email:String,
    password:String

   
})

const Users = mongoose.model('users', userSchema);
module.exports = {Users, mongoose}