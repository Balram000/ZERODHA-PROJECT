const {Schema} = require('mongoose');
const OrdertSchema = new Schema ({
    
    name: String,
    price: Number,
    percent:String,
    mode :String,

      
 })


module.exports=  { OrdertSchema}