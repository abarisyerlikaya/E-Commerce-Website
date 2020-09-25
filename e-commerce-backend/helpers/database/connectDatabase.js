const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
     })
    .then(() => {
        console.log("MongoDB connection established succesfully.");
    })
    .catch(err => {
        console.log("Error: " + err);
    });
};

module.exports = connectDatabase;