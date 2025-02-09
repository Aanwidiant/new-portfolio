import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI as string);

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
    if (!globalThis._mongoClientPromise) {
        globalThis._mongoClientPromise = client.connect();
    }
    clientPromise = globalThis._mongoClientPromise;
} else {
    clientPromise = client.connect();
}

export default clientPromise;
