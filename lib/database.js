const mongoose = require("mongoose")
const uri = process.env.MONGODB_URI2

const connect = async ()=>{
    try {
        mongoose.connect(uri)
        console.log("connected to mongodb")
    } catch (error) {
        console.log(error)        
    }
}

export default connect
