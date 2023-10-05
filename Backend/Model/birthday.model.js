const mongoose = require("mongoose")

const birthDaySchema = mongoose.Schema({
    name:{required:true, type:String},
    price:{required:true, type:Number},
    image:{required:true, type:String},
    brandId: {required:true, type:String}
},{
    versionKey:false
})

const BirthModel = mongoose.model("birthgift", birthDaySchema)

module.exports = {
    BirthModel
}