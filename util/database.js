const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

let url = "mongodb://localhost:27017/mydb";

const mongoConnect = (callback) => {
    mongoClient.connect(url).
    then(
        client => {
            console.log('Connected');
            callback(client);
        }
    ).
    catch(err => {
        console.log('Error');
        console.log(err);
    })
    
}

module.exports = mongoConnect;