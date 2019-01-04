const mongoDb = require('mongodb');
const getDb = require('../util/database').getDb; // call this funtion to get access and use the database

class Product {

  constructor(title,imageUrl,description,price){
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

    save(){
      let db = getDb(); // get access to the database from here
      return db.collection('products').insertOne(this)
      .then(result => {
        console.log('result');
      }).catch(err => {
        console.log(err);
      }) // specifies in which collection you aim to work. If database is not present this created the database once you start inserting the data
    }

    static fetchAll(){
      let db = getDb()
      return db.collection('products').find().toArray()
      .then(products => {
        console.log(products);
        return products;
      })
      .catch(err => {
        console.log(err)
      });

    }

    static findById(prodId){
      let db = getDb();
      return db.collection('products').find({_id: new mongoDb.ObjectID(prodId)}).next() // In mongodb the id is set in a form of an object and to compare the id we use this method
      .then(product => {
        console.log(product);
        return product;
      })
      .catch(err => {
        console.log(err); 
      })
    }
  


}

module.exports = Product;