import { injectable } from "inversify";
import mongoose from "mongoose";
import { dbUri } from "./app.config";

@injectable()
export class DbConfig {
  async connect() {
    try {
      const connection = await mongoose.connect(dbUri);
      console.log("Connected to the database successfully");
      return connection;
    } catch (error) {
      console.error(
        "Failed to connect to the database. See error message below"
      );
      console.error(error);
    }
  }
}
