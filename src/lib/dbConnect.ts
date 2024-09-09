import mongoose from "mongoose";

type ConnectionObject = { isConnected?: number };

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already Connected to Db");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log("db connected!");
    console.log(db);
    console.log(db.connections);
  } catch (err) {
    console.log("Db connection fail", err);

    process.exit();
  }
}
export default dbConnect;
