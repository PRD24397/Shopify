const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

let url = "mongodb://localhost:27017/mydb";
let _db
const mongoConnect = (callback) => {
    mongoClient.connect(url).
    then(
        client => {
            console.log('Connected');
            _db = client.db()
            callback(client); // returning a client object in callback
        }
    ).
    catch(err => {
        console.log('Error');
        console.log(err);
        throw err;
    })
    
}

const getDb = () => {
    if(_db){
        return _db;
    }
    else{
        throw 'No database found';
    }
}


exports.mongoConnect = mongoConnect;
exports.getDb = getDb;