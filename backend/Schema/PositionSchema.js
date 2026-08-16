const {Schema} = require('mongoose');
const PositionSchema = new Schema ({
    
    product: String,
    name:  String,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    
      
 })


module.exports= {PositionSchema}