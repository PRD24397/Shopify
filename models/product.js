
const getDb = require('../util/database').getDb;

class Product {
  constructor(title,imageUrl,description,price){
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price
  }

  save(){

  }
  
}