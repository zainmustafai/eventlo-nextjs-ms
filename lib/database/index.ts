import mongoose from 'mongoose';
const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || {
    conn: null,
    promise: null,
};

export const connectToDatabase = async () => {
    if (cached.conn) {
        return cached.conn;
    };
    if (!MONGODB_URI) {
        throw new Error('MongoDB URI is missing!!!');
    };
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'fypgmsdb',
        bufferCommands: false,
    });
    // if (!cached.promise) {
    //     const opts = {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //         bufferCommands: false,
    //         bufferMaxEntries: 0,
    //         useFindAndModify: false,
    //         useCreateIndex: true,
    //     };
    //     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
    //         return mongoose;
    //     });
    // }
    cached.conn = await cached.promise;
    return cached.conn;
};

// Pattern explanation:
// 1. We create a global variable called cached, which will store our connection and promise.
// 2. We check if there’s already a connection, and if there is, we return it.
// 3. If there’s no connection, we check if there’s already a promise to connect to MongoDB.
// 4. If there’s no promise, we create one using mongoose.connect().
// 5. Finally, we await both the promise to resolve and the connection to be cached.
// 6. We return the connection.
