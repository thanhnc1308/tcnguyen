import mongoose from 'mongoose';

async function dbConnect() {
  const MONGODB_URI = process.env.MONGODB_URI!;

  if (!MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local',
    );
  }

  const opts = {
    bufferCommands: false,
  };

  return mongoose.connect(MONGODB_URI, opts);
}

export default dbConnect;
