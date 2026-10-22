import {MongoClient} from 'mongodb'

const url = process.env.MONGODB_URI
if (!url) {
  throw new Error("Add MONGODB_URI to .env.local");
}
let client;
let clientPromise;
if(process.env.NODE_ENV === 'development'){
    if(!global._mongoClientPromise){
         client = new MongoClient(url)
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
}else{
    client = new MongoClient(uri)
    clientPromise = client.connect()
}

export default clientPromise
