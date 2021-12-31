import mongoose from "mongoose"
import { dbUri } from "./app.config";

export async function connectToDatabase(){
  try {
    await mongoose.connect(dbUri)
    console.log("Connected to the database successfully")
  } catch (error) {
    console.error("Failed to connect to the database. See error message below")
    console.error(error)
  }
}