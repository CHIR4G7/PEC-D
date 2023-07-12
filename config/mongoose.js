const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://saketahlawat:nitin@cluster0.ohd4krs.mongodb.net/Pec-D');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to the database"));

db.once('open',function(){
    console.log('Connected to the database :: MongoDb');
});

module.exports = db;
