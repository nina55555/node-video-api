const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/node-video-api",
    //
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if(!err) console.log("Mongodb connecté avec grâce a node video api");
        else console.log("erreur de connection:"+err);
    }
)