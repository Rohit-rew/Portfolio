const mongoose = require("mongoose")
const uri = process.env.MONGODB_URI2

const connect = async ()=>{
    try {
        mongoose.connect(uri)
    } catch (error) {
        console.log(error)        
    }
}

export default connect
