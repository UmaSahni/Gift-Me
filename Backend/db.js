const mongoose = require('mongoose')

const connected = mongoose.connect("mongodb+srv://uma:uma@cluster0.g3tcjlo.mongodb.net/giftme?retryWrites=true&w=majority")

module.exports={connected}