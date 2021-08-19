"use strict";

import { MongoClient } from 'mongodb'

// let uri = process.env.MONGODB_URI
let uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.kvlzt.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`
let dbName = process.env.MONGODB_DB

// const options = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// };

let cachedClient = null
let cachedDb = null

if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if (!dbName) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  )
}

// if (process.env.NODE_ENV === "development") {

//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (hot module replacement).
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
  
//   clientPromise = global._mongoClientPromise;

// } else {

//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect()
// }


//   // Export a module-scoped MongoClient promise. By doing this in a
//   // separate module, the client can be shared across functions.
//   module.exports = clientPromise;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db = await client.db(dbName)

  cachedClient = client
  cachedDb = db

  return { client, db }
}
