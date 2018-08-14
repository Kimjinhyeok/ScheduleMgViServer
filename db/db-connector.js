var mongoose = require('mongoose');
var bluebird = require('bluebird')
var path = require('path');
var fs = require('fs');

mongoose.Promise = bluebird;
// Initializing connector
var mongoConnector = {};

var configPath = path.join(__dirname, '../config/');
var dbConfigFile = fs.readFileSync(configPath + "dbConfig.json", "utf-8",
 (err, data)=>{
    if(err){
        console.log(err.message);
    }
});

var dbConfig = JSON.parse(dbConfigFile);

mongoConnector.url = 'mongodb://' + dbConfig.host + ":" + dbConfig.port + "/" + dbConfig.dbname;
mongoConnector.connected = function(db){
    console.log("Successfully Connected!");
}

//When Connect encouter error
mongoConnector.alterResult = function(err, db){
    if(err){
        console.log("Connector has error while connect to DB");
        return;
    }
    mongoConnector.connected(db);
}

mongoConnector.connectDB = function(){
    //connect(string, callback)
    mongoose.connect(this.url, this.alterResult);   
}

module.exports = mongoConnector;