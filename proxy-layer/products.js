var configs = require('../configs');
var MongoClient = require('mongodb').MongoClient;
var dbUrl = configs.dbCon.url;
var path = require('path');
module.exports = function(req,res) {
    console.log('Inside products.js')
    MongoClient.connect(dbUrl,function(err,database) {
        if(err) {
            console.log('Error: '+err);
        }
        else {
        console.log('Connection Successful');
        var db = database; 
        /*db.collection('products').find({},function(err,cursor){
            cursor.toArray(function(err,data){
                console.log(data);
                res.json(data);
                });
            });*/
        }
    });
    res.sendFile(path.join(__dirname,'..','public/pages/products.html'));
}