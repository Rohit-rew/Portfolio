import {MongoClient} from "mongodb"

const uri = process.env.MONGODB_URI

let client 
let connectPromise

if(process.env.NODE_ENV == "development"){

    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, {})
        global._mongoClientPromise = client.connect()
      }
      connectPromise = global._mongoClientPromise
}else{
    client = new MongoClient(uri , {})
    connectPromise = client.connect()
}

export default connectPromise