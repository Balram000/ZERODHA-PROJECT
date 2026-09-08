const mongoose =require('mongoose')

 const { holdingSchema} =require ('../Schema/HoldingSchema')

 const holdingModel =  mongoose.model ('holding' ,holdingSchema)

 module.exports ={ holdingModel };