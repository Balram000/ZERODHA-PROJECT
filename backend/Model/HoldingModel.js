const mongoose =require('mongoose')

 const { HoldingSchema} =require ('../Schema/HoldingSchema')

 const holdingModel =  mongoose.model ('holding' ,HoldingSchema)

 module.exports ={ holdingModel };