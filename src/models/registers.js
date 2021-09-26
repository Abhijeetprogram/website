const mongooose = require("mongoose");

const firstSchema = new mongooose.Schema({
    name :{
        type:String,
        requried:true
    },

    password :{
        type:String,
        requried:true,
        unique:true
    },

})

const Register = new mongooose.model("register",firstSchema);

module.exports = Register;