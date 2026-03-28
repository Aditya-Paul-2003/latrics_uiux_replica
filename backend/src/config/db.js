import mongoose from "mongoose";

/**
 * Establishes the asynchronous connection to MongoDB using Mongoose.
 * 
 * Why Mongoose?
 * Mongoose provides schema validation, middleware hooks, and a robust query building
 * API over the native MongoDB driver, ensuring strict data integrity.
 * 
 * Note on Resiliency:
 * By design, if the DB fails to connect, we log a warning but DO NOT crash the process.
 * This allows the live Socket.IO layer and static frontend deployments to remain operational 
 * even if the database cluster goes down.
 */
export async function connectDatabase() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.warn("[DB Warning] MONGODB_URI not found. Data will not be persisted.");
    return;
  }

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000 // Fails fast if DB is down
    });
    console.log("[DB] Connected to MongoDB");
  } catch (error) {
    console.error("[DB Error] Connection failed:", error.message);
    console.warn("[DB Warning] Server running WITHOUT database persistence.");
  }
}
