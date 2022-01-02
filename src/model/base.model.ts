import { Schema, SchemaOptions, SchemaTypes } from "mongoose";

export interface IBaseModel {
  _id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

const baseSchemaOptions: SchemaOptions = {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
  // TODO: JSON and object types
};

export const baseSchema = new Schema(
  {
    _id: {
      type: String,
    },
    deleted_at: SchemaTypes.Date,
  },
  { ...baseSchemaOptions }
);
