//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/fcdb';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // do some work here with the database.
    var collection = db.collection('Feat');
    
    collection.find({type: /^species$/i}).toArray(function (err, result) {
        if(err) {
            console.log(err);
        } else if(result.length) {
            console.log('Found:', result);
        } else {
            console.log("nothing Found");
        }
    });

    //Close connection
    db.close();
  }
});
