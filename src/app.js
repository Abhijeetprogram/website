const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
//const bodyParser = require("body-parser");
//const bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({
   // extended: true
  //}));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
})); 

port = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://mongodb1:mongo12345@cluster0.whvld.mongodb.net/am?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true

})
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

const noteSchema = {
     name:String,
     password:String
}

const Note = mongoose.model("Note", noteSchema)

//require("./db/conn");

//const Register = require("./models/registers"); 



 
app.get("/" ,function (req,res) {
    res.sendFile(__dirname + "/index.html");

});
app.post("/", function(req,res){
    let newNote = new Note({
        name:req.body.name,
        password:req.body.password
    });
    newNote.save();
    res.redirect('/');
})

app.listen(port, () =>{
    console.log(`server is running on ${port}`);

})