var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// create a schema
var featSchema = new Schema({
    type: String,
    name: String,
    subName: String,
    description: String,
    prerequisites: String,
    benefit: String,
    trickStanceName: String, 
    list: String, 
    special1: String, 
    special2: String, 
    special3: String, 
    referencePage: String, 
    keywords: String, 
});

// the schema is useless so far
// we need to create a model using it
var Feat = mongoose.model('Feat', featSchema);

// make this available to our users in our Node applications
module.exports = Feat;
