const mongoose  = require("mongoose");


mongoose.connect("mongodb+srv://mongodb1:mongo12345@cluster0.whvld.mongodb.net/am?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})