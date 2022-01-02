import { injectable } from "inversify";
import { Schema } from "mongoose";
import { IBaseModel } from "./base.model";
import { BaseRepository } from "./base.repo";

interface User extends IBaseModel {
  first_name: string;
  last_name: string;
  email: string;
}

export const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

/* A repository is an abstraction layer over the ORM */
@injectable()
export class UserRepository extends BaseRepository<IBaseModel> {
  constructor(name: string, schema: Schema) {
    super(name, schema);
  }
}

export const userRepo = new UserRepository("User", userSchema);
