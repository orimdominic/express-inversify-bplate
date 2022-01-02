import { injectable } from "inversify";
import { Schema, model } from "mongoose";

@injectable()
export class BaseRepository<IDocModel> {
  #model;
  constructor(name: string, schema: Schema<IDocModel>) {
    this.#model = model(name, schema);
  }

  // TODO: Change return types to T
  async create() {
    return "op: baseRepository.create";
  }
  async getOne() {
    return "op: baseRepository.getOne";
  }
  async getMany() {
    return "op: baseRepository.getMany";
  }
  async update() {
    return "op: baseRepository.update";
  }
  async delete() {
    return "op: baseRepository.delete";
  }
}
