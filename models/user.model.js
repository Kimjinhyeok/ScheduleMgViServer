var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    isprivacy : {type : Boolean, require : true, unique : true},
    name : {type : String, require : true },
    password : {type : String, require : true},
    email : {type : String, require : true},
    access : {type : Date, default : new Date()}
});

const UserModel = mongoose.model('Users', userSchema);

module.exports = UserModel;