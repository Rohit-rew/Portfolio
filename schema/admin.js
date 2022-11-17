const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    email : String,
    salt : String,
    hash : String
})

const adminschema = mongoose.model('admin' , schema)

export default adminschema