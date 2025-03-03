const mongoose = require('mongoose');


const connectDatabase = ()=> {
    mongoose.connect(process.env.MONGO_URI).then(()=> {
        console.log("MongoDb connected to host "+mongoose.connection.host);
    });
}

module.exports = connectDatabase;