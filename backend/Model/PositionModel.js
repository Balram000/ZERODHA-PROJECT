const Mongoose =require('mongoose')

 const { PositionSchema} =require ('../Schema/PositionSchema')

 const positionModel = Mongoose.model ('position' ,PositionSchema)
 
 module.exports ={positionModel}