const { default: mongoose, } = require("mongoose");

const ImgSchema = new mongoose.Schema({
    name : {
        type : String
    },
    path : {
        type : String
    },
    type : {
        type : String
    }
})

module.exports = mongoose.model('images' , ImgSchema)