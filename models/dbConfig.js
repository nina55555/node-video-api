const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Mongodb connecté avec grâce a node video api'))
.catch(err => console.log(err) );


/*("mongodb://localhost:27017/node-video-api",
    */

/*
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if(!err) console.log("");
        else console.log("erreur de connection:"+err);
    }cls
)
*/