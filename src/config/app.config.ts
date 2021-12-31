import { config } from "dotenv";

config()

export const PORT = 5000

export const dbUri = process.env.DB_URI ?? "mongodb://localhost:27017"