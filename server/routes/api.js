const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const article = require('../models/article');

var db = 'mongodb://ahmad:heartis10@ds139934.mlab.com:39934/blogapp';

mongoose.Promise = global.Promise;


const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };



mongoose.connect(db, options)
.then(() => console.log('connecting to database successful'))
.catch(err => console.error('could not connect to mongo DB', err));

router.get('/all', function(req, res){
    article.find({}).exec(function(err, articles){
        if(err){
            console.log('Error getting the articles');
        }else {
            console.log(articles);
            res.json(articles);
        }
    });
});


module.exports = router;