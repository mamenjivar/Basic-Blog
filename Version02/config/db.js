// CONNECT TO DB
const mongoose = require('mongoose');

let connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/basic_blog', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('local mongoDB connected');
    } catch(err) {
        console.log(err.message);
        console.log('SOMETHING WENT WRONG localDB')

        // EXIT PROCESS WITH FAILURE IF DOESN'T CONNECT
        process.exit(1);
    }
}

module.exports = connectDB